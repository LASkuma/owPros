import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { dismissQueryError } from '../actions';

class ErrorPanel extends Component {
  render() {
    const { dismissed, message, dismissQueryError } = this.props;
    return (
      <div
        className={dismissed ? 'error-panel' : 'error-panel error-active'}
        onClick={dismissQueryError}
        style={style.wrapper}>
        <div style={style.panel}>
          <div style={style.header}>
            <span style={style.icon}>!</span>
            <span>格式不正确</span>
          </div>
          <div style={style.description}>
            <p style={style.paragraph}>
              {message + ' [点击关闭]'}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dismissed: state.query.error.dismissed,
    message: state.query.error.message
  }
}

export default connect(mapStateToProps, { dismissQueryError })(ErrorPanel);

const style = {
  wrapper: {
    position: 'relative'
  },
  panel: {
    position: 'absolute',
    width: '100%',
    color: '#2a2a2a'
  },
  header: {
    height: '40px',
    width: '100%',
    backgroundColor: '#f9be4a',
    borderRadius: '4px 4px 0 0'
  },
  description: {
    height: '50px',
    backgroundColor: 'white',
    borderRadius: '0 0 4px 4px',
  },
  paragraph: {
    color: '#2a2a2a',
    lineHeight: '50px',
    paddingLeft: '10px'
  },
  icon: {
    height: '28px',
    width: '28px',
    display: 'inline-block',
    backgroundColor: 'white',
    margin: '6px 6px 6px 10px',
    borderRadius: '14px',
    color: '#f9be4a',
    fontFamily: 'Overwatch',
    lineHeight: '28px',
    textAlign: 'center',
    fontSize: '1.5em'
  }
};
