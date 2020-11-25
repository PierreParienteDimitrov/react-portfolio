import React, { useState } from 'react';
import './_navigation.scss';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='NavbarItem'>
			<h1 className='navbar-logo'>React</h1>

			{MenuItems.map((item, index) => {
				return (
					<NavLink className='d-inline p-2' to={item.url}>
						{item.title}
					</NavLink>
				);
			})}
		</nav>
	);
};

export default Navigation;
