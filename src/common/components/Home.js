import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { queryRegionChange } from '../actions';

const style = {
  header: {
    fontSize: '87.5%',
    position: 'relative',
    padding: '.5rem 1rem',
    display: 'block',
    boxSizing: 'border-box',
    lineHeight: '1.5',
    color: '#373a3c',
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
  left: {
    float: 'none',
    width: 'auto',
    overflow: 'hidden'
  },
  right: {
    width: '0px',
    float: 'right'
  },
  region: {
    color: '#5f5e5e',
    lineHeight: '38px',
    left: '-45px',
    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    width: '30px'
  },
  battletag: {
    paddingRight: '45px'
  },
  go: {
    fontFamily: 'Overwatch',
    fontSize: '20px',
    paddingRight: '32px',
    backgroundColor: '#f9be4a',
    border: 'none',
    color: 'black'
  },
  block: {
    paddingTop: '100px',
    paddingBottom: '80px',
    backgroundColor: '#2A2A2A'
  }
}

const Home = ( { handleRegionChange, region, regionText, router }) => {
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
            <div style={Object.assign({}, style.right, {width: '50px', marginLeft: '6px'})}>
              <button onClick={() => router.push(`/career/${region}/${this.input.value}`)} style={style.go}>GO</button>
            </div>
            <div style={style.left}>
              <div style={style.right}>
                <a onClick={handleRegionChange} style={style.region}>{regionText}</a>
              </div>
              <div style={style.left}>
                <input className="u-full-width" type="text" placeholder="请输入以 ＃数字 结尾的BattleTag。" ref={node => {
                  this.input = node;
                }} style={style.battletag} />
              </div>
            </div>
            <p style={{color: 'white'}}>
              【注意】可以点击右侧服务器名称切换区域，英文字母区分大小写。
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  handleRegionChange: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  regionText: PropTypes.string.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
}

const getRegionText = (region) => {
  switch(region) {
    case 'us':
      return '美服';

    default:
      return '国服';
  }
}

const mapStateToProps = (state) => {
  return {
    region: state.query.region,
    regionText: getRegionText(state.query.region)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegionChange: (e) => {
      e.preventDefault();
      dispatch(queryRegionChange());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
