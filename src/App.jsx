import React from 'react';

import Router from './Router.jsx';
import Menu from './Menu.jsx';

export default class App extends React.Component {

	constructor() {
		super();

		this.state = {
			showSpinner: true,
			path: null
		};
	}

	componentDidMount() {
		console.log('mounted!');
		this.navigate(window.location.pathname);

		setTimeout(() => {
			this.setState({showSpinner: false});
		}, 1000);
	}

	navigate (path) {
		this.setState({path});
		window.history.pushState({}, '', path);
	}

	render () {
		if (this.state.showSpinner) {
			return (
				<div className="spinner-wrap">
					<div className="spinner-border text-primary" style={{width: '5rem', height: '5rem'}} role="status"></div>
				</div>
			);
		} else {
			return (
				<div>
					<Menu navigate={this.navigate.bind(this)}/>
					<div style={{paddingTop: '4rem'}}>
						<Router path={this.state.path}/>
					</div>
				</div>
			);
		}
	}
}