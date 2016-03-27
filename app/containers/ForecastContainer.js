var React = require('react');
var Forecast = require('../components/Forecast');
var API = require('../helpers/api')
var PropTypes = React.PropTypes;

var styles = {
	background: {
		height: '100%',
		width:'100%'
	}
}


var ForecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			isLoading: true,
			weatherData: {}
		}
	},
	componentDidMount: function(){
		console.log(this.props.routeParams.city)
		API.getForecast(this.props.routeParams.city)
			.then(function(weatherData){
				console.log(weatherData)
				this.setState({
					isLoading: false,
					weatherData: weatherData
				})
			}.bind(this))
	},
	componentWillReceiveProps: function(nextProps){
		API.getForecast(nextProps.routeParams.city)
			.then(function(weatherData){
				this.setState({
					isLoading:false,
					weatherData: weatherData
				})
			}.bind(this))
	},
	handleClick: function( forecastData ){
		this.context.router.push({
			pathname: '/detail/'+this.props.routeParams.city,
			state: {
				weather: forecastData
			}
		})
	},
	render: function(){
		return (
			<div style={styles.background}>
				<Forecast 
				 	city={this.props.routeParams.city}
					forecastData={this.state.weatherData}
					isLoading={this.state.isLoading}
					handleClick={this.handleClick}
					/>
			</div>
			)
	}
})

module.exports = ForecastContainer;