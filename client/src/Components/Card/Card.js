import React, { useState } from 'react';
import './_card.scss';

function Card() {
	const [likes, setLikes] = useState({ count: null });

	const likeHandler = () => {
		setLikes({ count: likes.count + 1 });
	};

	return (
		<div className='card'>
			<div className='card-wrapper'>
				<img src='https://picsum.photos/200/300' alt='' />
				<div className='card-wrapper_actions'>
					<h4>
						UX-UI Design - <span class='project-name'>Tempso</span>
					</h4>
					<div className='icons'>
						<div className='link'>
							<a href='https://dribbble.com/Pariente'>
								<i class='fas fa-link'></i>
							</a>
						</div>

						<div className='likes' onClick={likeHandler}>
							<i class='fas fa-heart'></i>
							<p>{likes.count}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
