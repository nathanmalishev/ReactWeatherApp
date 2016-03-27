var React     = require('react');
var PropTypes = React.PropTypes;
var Detail    = require('../components/Detail');


var DetailContainer = React.createClass({
	render: function(){
		console.log(this.props.location.state.weather)
		return (
			<div>
				<Detail day={this.props.location.state.weather} city={this.props.routeParams.city}/>
			</div>
			)
	}
});

module.exports = DetailContainer;