import React, { PropTypes } from 'react';
import Nav from './Nav';
import SearchBlock from './SearchBlock';

const Home = () => {
  return (
    <div>
      <Nav />
      <div style={style.block}>
        <div className="container">
          <div className="row">
          <div className="eight columns offset-by-two" style={{paddingLeft: 10, paddingRight: 8}}>
            <SearchBlock />
            <p style={{color: 'white', marginTop: 10}}>
              【注意】点击右侧服务器名称切换区域，英文字母区分大小写。
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;

const style = {
  block: {
    paddingTop: '100px',
    paddingBottom: '80px',
    backgroundColor: '#2A2A2A'
  }
};
