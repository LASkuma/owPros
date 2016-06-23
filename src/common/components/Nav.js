import React from 'react';

const Nav = ({ children }) => {
  return (
    <header style={style.header}>
      <nav>
        <div className="row">
          <div className="two columns">
            <a href='/' style={style.logo}>OP | OW Pros</a>
          </div>
          { children }
        </div>
      </nav>
    </header>
  )
};

export default Nav;

const style = {
  header: {
    fontSize: '87.5%',
    position: 'relative',
    padding: '.5rem 1rem',
    display: 'block',
    boxSizing: 'border-box',
    lineHeight: '1.5',
    color: '#2a2a2a',
    backgroundColor: '#f9be4a',
  },
  logo: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxSizing: 'border-box',
    color: 'rgb(0, 0, 0)',
    cursor: 'auto',
    display: 'block',
    fontSize: '30px',
    lineHeight: '21px',
    paddingBottom: '6.8px',
    paddingTop: '6.8px',
    textDecoration: 'none',
    fontFamily: 'Overwatch'
  }
};
