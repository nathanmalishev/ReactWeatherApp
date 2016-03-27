var React     = require('react');
var PropTypes = React.PropTypes;
var Loading   = require('./Loading');
var Utils     = require('../helpers/utils');

var styles = {
	container:{
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		maxWidth: 1200,
		margin: '50px auto'
	},
	dayContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin:35
	},
	image: {
		minHeight:'100px',
		height:130
	},
	header: {
		textAlign:'center',
		fontSize: 65,
		color: '#333'
	},
	subHeader: {
		textAlign: 'center',
		fontWeight:300
	}
}

function DayItem(props){
	let date = Utils.getDate(props.day.dt);
	let icon = props.day.weather[0].icon;
	return(
		<div style={styles.dayContainer} onClick={props.handleClick}>
			<img src={'./app/images/weather-icons/'+icon+'.svg'}
				style={styles.image}/>
			
			<h4 style={styles.subHeader}>{Math.round(props.day.temp.day)}&#8451; </h4>
			<h4 style={styles.subHeader}>{date}</h4>
			
		</div>
		)
}

function ForecastUI(props){
	return(
		<div>
			<h1 style={styles.header}>{props.city}</h1>
			<h3 style={styles.subHeader}>Select a day</h3>
			<div style={styles.container}>
				{props.forecast.list.map(function(day){
					return <DayItem key={day.dt} 
									day={day} 
									handleClick={props.handleClick.bind(null,day)}/>
				})}
			</div>
		</div>
		)
}


function Forecast(props) {
	return (
		<div>
			{
				props.isLoading === true
					? <Loading />
					: <ForecastUI 
							city={props.city} 
							forecast={props.forecastData} 
							handleClick={props.handleClick}/>
			}
		</div>
		)

}

Forecast.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	forecastData: PropTypes.object.isRequired,
	city: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;