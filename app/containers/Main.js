import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import GetCityContainer from'./GetCityContainer';

const styles = {
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    color: '#fff',
    backgroundColor: '#3CBBE6',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

class Main extends Component{
  render() {
    return (
     <div style={styles.container}>
      <div style={styles.header}>
        <IndexLink to="/" style={styles.link}>
          <h1 style={{ margin: 0 }}>AusWeather App</h1>
        </IndexLink>
        <GetCityContainer direction='row'/>
      </div>
        {this.props.children}
      </div>
     );
  }
}

export default Main;
