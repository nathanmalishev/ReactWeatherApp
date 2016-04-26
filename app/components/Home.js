import React from 'react';
import GetCityContainer from '../containers/GetCityContainer';

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: 'url("/marble.jpg")',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '92.8%',
    width: '100%',
  },
  header: {
    fontSize: 45,
    color: 'black',
    fontWeight: 100,

  },
};

function Home(props) {
  return (
   <div style={styles.container}>
			<h1 style={styles.header}> Enter an Australian City </h1>
				<GetCityContainer />
		</div>
   );
}

export default Home;
