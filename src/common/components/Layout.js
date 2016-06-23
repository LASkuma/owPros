import React from 'react';
import Nav from './Nav';
import SearchBlock from './SearchBlock';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav>
        <div className="six columns">
          <SearchBlock />
        </div>
      </Nav>
      <div className="container">
        { children }
      </div>
    </div>
  )
};

export default Layout;
