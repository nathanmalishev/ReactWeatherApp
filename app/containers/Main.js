

import React from 'react';
import {IndexLink} from 'react-router'
var GetCityContainer = require('./GetCityContainer');

var styles = {
	container: {
		height:'100%',
		width:'100%',
		
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems:'center',
		padding:5,
		color: '#fff',
		backgroundColor:'#3CBBE6'
	},
	link: {
		color: 'inherit',
		textDecoration:'none'
	}
}

var Main = React.createClass({
	render() {
		return (
			<div style={styles.container}>
			<div style={styles.header}>
				<IndexLink to="/" style={styles.link}>
					<h1 style={{margin:0}}>AusWeather App</h1>
				</IndexLink>
				<GetCityContainer direction='row'/>
			</div>
				{this.props.children}
			</div>
			)
	}
})


module.exports = Main;