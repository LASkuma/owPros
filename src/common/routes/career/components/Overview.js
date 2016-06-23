import React, { PropTypes } from 'react';

const Overview = ({ winRate, kd, spm }) => {
  return (
    <div>
      <div style={style.wrBackground}>
        <span style={style.wrTitle}>
          胜率
        </span>
        <span style={style.wrData}>
          {winRate}
        </span>
      </div>
      <div style={style.rightPanel}>
        <div style={{height: '70px', backgroundColor: '#E23849'}}>
          <span style={style.rpTitle}>
            K/D
          </span>
          <span style={style.rpData}>
            {kd}
          </span>
        </div>
        <div style={{height: '70px', backgroundColor: '#573EFC'}}>
          <span style={style.rpTitle}>
            每分钟得分
          </span>
          <span style={style.rpData}>
            {spm}
          </span>
        </div>
      </div>
    </div>
  )
};

Overview.propTypes = {
  winRate: PropTypes.string.isRequired,
  kd: PropTypes.string.isRequired,
  spm: PropTypes.string.isRequired
};

export default Overview;

const style = {
  wrBackground: {
    width: '50%',
    height: '140px',
    backgroundColor: '#7ae22d',
    display: 'inline-block'
  },
  wrTitle: {
      display: 'block',
      paddingTop: '26px',
      paddingLeft: '10px',
      fontSize: '1.2em'
  },
  wrData: {
      paddingLeft: '10px',
      fontSize: '3em'
  },
  rightPanel: {
      display: 'inline-block',
      width: '50%',
      height: '140px',
      verticalAlign: 'top'
  },
  rpTitle: {
      display: 'block',
      paddingTop: '6px',
      paddingLeft: '10px',
      fontSize: '1.2em'
  },
  rpData: {
    display: 'block',
    paddingLeft: '10px',
    lineHeight: '26px',
    fontSize: '2em'
  }
};
