import React, { PropTypes, Component } from 'react';
import Forecast from '../components/Forecast';
import {getForecast} from '../helpers/api';

const styles = {
  background: {
    height: '100%',
    width: '100%',
  },
};

class ForecastContainer extends Component{

  constructor() {
    super();
    this.state = {
      isLoading: true,
      weatherData: {},
    };
  }

  componentDidMount() {
    getForecast(this.props.routeParams.city)
     .then((weatherData) => {
      this.setState({
        isLoading: false,
        weatherData: weatherData,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    getForecast(nextProps.routeParams.city)
     .then((weatherData)=> {
      this.setState({
        isLoading: false,
        weatherData: weatherData,
      });
    });
  }

  handleClick(forecastData) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: forecastData,
      },
    });
  }

  render() {
    return (
     <div style={styles.background}>
        <Forecast
        city={this.props.routeParams.city}
        forecastData={this.state.weatherData}
        isLoading={this.state.isLoading}
        handleClick={this.handleClick}
      />
      </div>
     );
  }
}

ForecastContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default ForecastContainer;
