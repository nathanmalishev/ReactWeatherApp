var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
	container: {
		backgroundSize: 'cover',
		backgroundImage: "url('app/images/marble.jpg')",
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '92.8%',
		width: '100%'
	},
	header: {
		fontSize: 45,
		color: 'black',
		fontWeight: 100

	}
}

function Home (props) {
	return (
		<div style={styles.container}>
			<h1 style={styles.header}> Enter an Australian City </h1>
				<GetCityContainer />
		</div>
		)
}

module.exports = Home;