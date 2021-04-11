import React from 'react';

export default function Menu (props) {

	function onClick (event) {
		event.preventDefault();
		props.navigate(event.target.pathname);
	}

	return (
		<nav className="navbar navbar-expand navbar-dark bg-primary fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="/" onClick={onClick}>Router Demo App</a>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="/about" onClick={onClick}>About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/contact" onClick={onClick}>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}