import React, { PropTypes } from 'react';
import SearchInput from './SearchInput';
import ErrorPanel from './ErrorPanel';

const Home = () => {
  return (
    <div>
      <header style={style.header}>
        <nav>
          <a href='/' style={style.logo}>OP | OW Pros</a>
        </nav>
      </header>
      <div style={style.block}>
        <div className="container">
          <div className="row">
          <div className="eight columns offset-by-two">
            <SearchInput />
            <ErrorPanel />
            <p style={{color: 'white'}}>
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
  },
  block: {
    paddingTop: '100px',
    paddingBottom: '80px',
    backgroundColor: '#2A2A2A'
  }
}
