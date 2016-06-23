import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { queryRegionChange, newQueryError } from '../actions';

class SearchInput extends Component {
  handleSubmit(router, region, battletag, handleQueryError){
    return (e) => {
      e.preventDefault();
      const battleTagRegEx = /^.+#[0-9]+$/;
      if (battleTagRegEx.test(battletag)) {
        battletag = battletag.replace(/#/, '-');
        router.push(`/career/${region}/${battletag}`);
      } else {
        handleQueryError('请输入以 #数字 结尾的完整Battletag。');
      }
    };
  }

  render() {
    const { handleRegionChange, handleQueryError, region, regionText, router } = this.props;

    return (
      <form style={{marginBottom: '0px'}}>
        <div style={Object.assign({}, style.right, {width: '50px', marginLeft: '6px'})}>
          <input className="button" type="submit" value="go"
            onClick={(e) => this.handleSubmit(router, region, this.input.value, handleQueryError)(e)}
            style={style.go} />
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
    )
  }
}


SearchInput.propTypes = {
  handleRegionChange: PropTypes.func.isRequired,
  handleQueryError: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  regionText: PropTypes.string.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchInput));

const style = {
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
    paddingRight: '45px',
    marginBottom: 0
  },
  go: {
    fontFamily: 'Overwatch',
    fontSize: '20px',
    paddingLeft: '14px',
    paddingRight: '16px',
    backgroundColor: '#f9be4a',
    border: 'none',
    color: 'black',
    marginBottom: 0
  }
};
