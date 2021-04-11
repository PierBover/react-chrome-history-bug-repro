import React from 'react';

import Menu from './Menu.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/contact',
		component: Contact
	}
];

export default function (props) {
	if (!props.path) return <div></div>;

	const route = routes.find((route) => route.path === props.path);
	const Component = route.component;
	return <Component/>;
};