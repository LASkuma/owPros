import React, { PropTypes } from 'react';
import CardHeader from './CardHeader';

const Card = ({ children, title, type }) => {
  return (
    <div className="card" style={style.card}>
      <CardHeader title={title} type={type} />
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Card;

const style = {
  card: {
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
  }
};
