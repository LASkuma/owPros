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
    backgroundColor: '#f9be4a',
    height: 40
  },
  title: {
    lineHeight: '40px',
    marginLeft: 10
  }
}
