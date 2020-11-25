import React, { useState } from 'react';
import './_navigation.scss';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<header>
			<div className='menu-btn'>
				<span className='menu-btn_burger'></span>
			</div>

			<nav className='nav'>
				<ul className='menu-nav'>
					{MenuItems.map((item, index) => {
						return (
							<li className='menu-nav_link' key={index}>
								<NavLink className='menu-nav_link' to={item.url}>
									{item.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
