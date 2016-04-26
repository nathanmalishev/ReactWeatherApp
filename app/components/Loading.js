import React, { PropTypes, Component } from 'react';

const styles = {
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  },
};

class Loading extends Component {

  constructor({ text }) {
    super();
    this.originalText = text;
    this.state =  {
      text: this.originalText,
    };
  }

  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText,
        });
      }else {
        this.setState({
          text: this.state.text + '.',
        });
      }
    }.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};

export default Loading;
