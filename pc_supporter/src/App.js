import React, { Component } from 'react';
import './App.js';
import Home from './Home';
import Recommend from './Recommend';
import Price from './Price';
import {
	Route
} from "react-router-dom";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";


function App() {
	return (
		<div>
			<Route path={['/', 'home']} component={Home} exact = {true}/>
			<Route path="/recommend" component={Recommend} />
			<Route path="/price" component={Price} />
		</div>
	);
}



export default App;