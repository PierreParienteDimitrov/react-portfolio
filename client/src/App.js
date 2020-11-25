import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About';
import Code from './Pages/Code';
import Design from './Pages/Design';
import Contact from './Pages/Contact';

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<Route exact path='/' component={About} />
				<Route path='/code' component={Code} />
				<Route path='/design' component={Design} />
				<Route path='/contact' component={Contact} />
			</div>
		</Router>
	);
}

export default App;
