import React, { PropTypes } from 'react';

const CardHeader = ({ title, type }) => {
  return (
    <div style={backgroundStyle(type)}>
      <span style={style.title}>
        { title }
      </span>
    </div>
  )
};

export default CardHeader;

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string
};

const backgroundStyle = (type) => {
  const basic = style.background;
  if (type === 'error') {
    return Object.assign({}, basic, {backgroundColor: '#FF1744'});
  }
  return basic;
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
