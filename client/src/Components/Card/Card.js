import React from 'react';
import './_card.scss';

function Card() {
	return (
		<div className='card'>
			<img src='https://picsum.photos/200/300' alt='' />
			<div className='card_content'>
				<h4>
					UX-UI DESIGN <span class='project-name'>TEMPSO</span>
				</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
					consequatur.
				</p>
			</div>
		</div>
	);
}

export default Card;
