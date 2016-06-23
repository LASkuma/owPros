import React, { PropTypes } from 'react';

const NameTag = ({ name }) => {
  return (
    <div style={style.background}>
        <span style={style.name}>{name}</span>
    </div>
  )
};

NameTag.propTypes = {
  name: PropTypes.string.isRequired
};

export default NameTag;

const style = {
  background: {
    height: 140,
    backgroundColor: '#2a2a2a',
    textAlign: 'center'
  },
  name: {
    lineHeight: '140px',
    color: 'white',
    fontFamily: 'Overwatch',
    fontSize: '3em'
  }
};
