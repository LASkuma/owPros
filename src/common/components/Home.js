import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { queryRegionChange, newQueryError } from '../actions';
import ErrorPanel from './ErrorPanel';

const Home = ({ handleRegionChange, handleQueryError, region, regionText, router }) => {
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
            <form style={{marginBottom: '0px'}}>
              <div style={Object.assign({}, style.right, {width: '50px', marginLeft: '6px'})}>
                <input className="button" type="submit" value="go" onClick={(e) => handleSubmit(router, region, this.input.value, handleQueryError)(e)} style={style.go} />
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
            </form>
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
}

Home.propTypes = {
  handleRegionChange: PropTypes.func.isRequired,
  handleQueryError: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  regionText: PropTypes.string.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};

const handleSubmit = (router, region, battletag, handleQueryError) => (e) => {
  e.preventDefault();
  const battleTagRegEx = /^.+#[0-9]+$/;
  if (battleTagRegEx.test(battletag)) {
    battletag = battletag.replace(/#/, '-');
    router.push(`/career/${region}/${battletag}`);
  } else {
    handleQueryError('请输入以 #数字 结尾的完整Battletag。');
  }
};

const getRegionText = (region) => {
  switch(region) {
    case 'us':
      return '美服';

    default:
      return '国服';
  }
};

const mapStateToProps = (state) => {
  return {
    region: state.query.region,
    regionText: getRegionText(state.query.region)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegionChange(e) {
      e.preventDefault();
      dispatch(queryRegionChange());
    },
    handleQueryError(message) {
      dispatch(newQueryError(message));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

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
    paddingLeft: '14px',
    paddingRight: '16px',
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
