import React, { useState } from 'react';
import './_navigation.scss';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const [click, setClick] = useState({ clicked: false });

	const handleClick = () => {
		setClick({ clicked: !click.clicked });
	};

	return (
		<header>
			<div className='menu-btn' onClick={handleClick}>
				<span
					className={click.clicked ? 'menu-btn_burger' : 'menu-btn_burger open'}
				></span>
			</div>

			<nav className={click.clicked ? 'nav' : 'nav open'}>
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
