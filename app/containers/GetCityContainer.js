import React, {PropTypes, Component} from 'react'
import GetCity from '../components/GetCity'

class GetCityContainer extends Component{

  constructor() {
    super();
    this.state =  {
      city: '',
    };
  }

  handleSubmitCity(e) {
    e.preventDefault();
    console.log(this.state.city);
    this.context.router.push('/forecast/' + this.state.city);

  }

  handleUpdateCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  render() {
    return (
     <GetCity
      direction={this.props.direction}
      onSubmitCity={this.handleSubmitCity}
      onUpdateCity={this.handleUpdateCity}
      city={this.state.city}/>
    );
  }
};

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
GetCityContainer.defaultProps = {
  direction: 'column'
}
GetCityContainer.propTypes = {
  direction: PropTypes.string
}

export default GetCityContainer;
