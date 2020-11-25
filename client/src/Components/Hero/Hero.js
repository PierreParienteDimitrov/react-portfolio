import React from 'react';
import './_hero.scss';

function Hero() {
	return (
		<>
			<header id='showcase'>
				<div className='content-wrap hero-grid'>
					<div className='list'>
						<ul>
							<li>
								<a href='/code'>web developer</a>
							</li>
							<li>
								<a href='/design'>
									<span className='link-italic'>designer</span>
								</a>
							</li>
							<li>
								<a href='/entrepreneur'>entrepreneur</a>
							</li>
						</ul>
					</div>

					<div className='description'>
						<p>
							Hi, my name is <strong>Pierre Pariente Dimitrov</strong>. I create
							websites and applications.
						</p>
						<a href='/contact' className='contact'>
							CONTACT ME
						</a>
					</div>
				</div>
			</header>
		</>
	);
}

export default Hero;
