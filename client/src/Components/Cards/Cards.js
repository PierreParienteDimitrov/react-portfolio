import React from 'react';
import Card from '../Card/Card';
import './_cards.scss';

function Cards() {
	return (
		<div className='content-wrap'>
			<div className='grid'>
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default Cards;
