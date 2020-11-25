import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About';
import Code from './Pages/Code';
import Design from './Pages/Design';
import Contact from './Pages/Contact';
import Entrepreneur from './Pages/Entrepreneur';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navigation />
				<Route exact path='/' component={About} />
				<Route path='/code' component={Code} />
				<Route path='/design' component={Design} />
				<Route path='/entrepreneur' component={Entrepreneur} />
				<Route path='/contact' component={Contact} />
			</div>
		</Router>
	);
}

export default App;
