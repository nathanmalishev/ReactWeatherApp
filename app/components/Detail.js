var React = require('react');
var PropTypes = React.PropTypes;
var Utils = require('../helpers/Utils');


var styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent:'center',
		alignItems:'center',
		fontSize:24,
		margin:'0 auto',
		textAlign:'center'
	},
	image: {
		height: 100,
		marginBottom:'15px'
	},
	header: {
		textAlign:'center',
		fontSize: 65,
		color: '#333',
		marginTop:'40px',
		marginBottom:'0px'
	},
	subHeader: {
		marginTop:'20px',
		marginBottom:'40px'
	}
}

function Detail(props){
	console.log(props.day.weather[0].icon)
	let icon = props.day.weather[0].icon;
	let date = Utils.getDate(props.day.dt);
	return (
		<div style={styles.container}>

			<h1 style={styles.header}>{props.city}</h1>
			<h3 style={styles.subHeader}>{date}</h3>
			<img src={'./app/images/weather-icons/'+icon+'.svg'} style={styles.image}/>
			
			
			<p>max: {Math.round(props.day.temp.max)}</p>
			<p>min: {Math.round(props.day.temp.min)}</p>
			<p>humidity: {Math.round(props.day.humidity)}</p>
		</div>
		)
}

module.exports = Detail;