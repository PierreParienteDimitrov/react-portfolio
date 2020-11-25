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
								<a href='/code'>Web Developer</a>
							</li>
							<li>
								<a href='/design'>Designer</a>
							</li>
							<li>
								<a href='/entrepreneur'>Entrepreneur</a>
							</li>
						</ul>
					</div>

					<div className='description'>
						<p>
							Hi, my name is <strong>Pierre Pariente Dimitrov</strong>. I create
							websites and applications.
						</p>
						<h4>WANT TO TALK?</h4>
						<a href='/contact' className='contact'>
							CONTACT ME
						</a>
					</div>
				</div>
			</header>

			{/* <main id='main'>
				<section id='section-a' className='grid'>
					<div className='content-wrap'>
						<h2 className='content-title'>Web & Application Development </h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
							consequatur laborum temporibus. Odio nihil aliquid doloremque possimus,
							molestiae perspiciatis porro!
						</p>
					</div>
				</section>

				<section id='section-b' className='grid'>
					<ul>
						<li>
							<div className='card'>
								<img src='https://picsum.photos/200/300' alt='' />
								<div className='card_content'>
									<h3 className='card_title'>Web Development</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
										illo.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className='card'>
								<img src='https://picsum.photos/200/300' alt='' />
								<div className='card_content'>
									<h3 className='card_title'>Web Development</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
										illo.
									</p>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<section id='seciont-c' className='grid'>
					<div className='content-wrap'>
						<h2 className='content-title'>We handle lorem</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, assumenda
							facilis aliquid eligendi perferendis optio. Nisi consectetur ad deleniti
							accusantium.
						</p>
					</div>
				</section>

				<section id='section-d' className='grid'>
					<div className='box'>
						<h2 className='content-title'>Contact</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
							quaerat dicta consectetur ut soluta aut explicabo qui beatae. Dolorem,
							corrupti.
						</p>
					</div>
				</section>
			</main> */}

			{/* <footer id='main-footer' className='grid'>
				<div>Footer</div>
				<div>By Pierre Pariente </div>
			</footer> */}
		</>

		// <div className='wrapper'>
		// 	<div>
		// 		<ul>
		// 			<li>Web Developer</li>
		// 			<li>UX-UI Designer</li>
		// 			<li>Entrepreneur</li>
		// 		</ul>
		// 	</div>
		// 	<div className='about-me'>
		// 		<p className='about-me_description'>
		// 			My name is Pierre Pariente Dimitrov. <br></br> I am a Full-stack Developer,
		// 			UX-UI Designer and Entrepreneur.
		// 		</p>
		// 		<p className='about-me_talk'>WANT TO TALK?</p>
		// 		<a className='about-me_contact' href='/contact'>
		// 			CONTACT ME
		// 		</a>
		// 	</div>
		// </div>
		// <div className='container'>
		// 	<h1>Hi, my name is Pierre Pariente Dimitrov</h1>
		// 	<h1>
		// 		I am a:{' '}
		// 		<ul>
		// 			<li>Full-stack Developer</li>
		// 			<li>Ux-UI Designer</li>
		// 			<li>Entrepreneur</li>
		// 		</ul>
		// 	</h1>
		// 	<button>Contact Me</button>
		// </div>
	);
}

export default Hero;
