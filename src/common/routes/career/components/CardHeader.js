import React, { PropTypes } from 'react';

const CardHeader = ({ title }) => {
  return (
    <div style={style.background}>
      <span style={style.title}>
        { title }
      </span>
    </div>
  )
};

export default CardHeader;

CardHeader.propTypes = {
  title: PropTypes.string.isRequired
};

const style = {
  background: {
    backgroundColor: '#404040',
    height: 40
  },
  title: {
    lineHeight: '40px',
    marginLeft: 10,
    color: 'white'
  }
};
