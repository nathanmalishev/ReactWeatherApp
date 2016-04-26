import React, { Component } from 'react';
import Detail from '../components/Detail';

class DetailContainer extends Component{
  render() {
    console.log(this.props.location.state.weather);
    return (
     <div>
        <Detail
            day={this.props.location.state.weather}
            city={this.props.routeParams.city}
          />
      </div>
     );
  }
}

export default DetailContainer;
