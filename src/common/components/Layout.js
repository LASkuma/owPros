import React from 'react';
import Nav from './Nav';
import SearchBlock from './SearchBlock';

const Layout = ({ children, dark }) => {
  return (
    <div>
      <Nav>
        <div className="six columns">
          <SearchBlock />
        </div>
      </Nav>
      <div className="row-wrapper" style={dark?{backgroundColor:'#2a2a2a'}:{}}>
        <div className="container">
          { children }
        </div>
      </div>
    </div>
  )
};

export default Layout;
