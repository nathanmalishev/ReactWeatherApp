import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
require('../main.css')
import DetailContainer from '../containers/DetailContainer'

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}></IndexRoute>
			<Route path='/forecast/:city' component={ForecastContainer} />
			<Route path='/detail/:city' component={DetailContainer} />
		</Route>
	</Router>
);

export default routes;