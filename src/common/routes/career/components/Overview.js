import React, { PropTypes } from 'react';

const Overview = ({ winRate, kd, spm }) => {
  return (
    <div>
      <div style={style.wrBackground}>
        <span style={style.wrTitle}>
          胜率
        </span>
        <div style={{textAlign: 'center', marginTop: 20}}>
          <span style={style.wrData}>
            {winRate}
          </span>
        </div>
      </div>
      <div style={style.rightPanel}>
        <div style={{height: '78px', backgroundColor: '#FF1744'}}>
          <span style={style.rpTitle}>
            K/D
          </span>
          <div style={{textAlign: 'center', marginTop: 8}}>
            <span style={style.rpData}>
              {kd}
            </span>
          </div>
        </div>
        <div style={{height: '78px', backgroundColor: '#2979ff'}}>
          <span style={style.rpTitle}>
            每分钟得分
          </span>
          <div style={{textAlign: 'center', marginTop: 8}}>
            <span style={style.rpData}>
              {spm}
            </span>
          </div>
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
    height: '156px',
    backgroundColor: '#f9be4a',
    display: 'inline-block'
  },
  wrTitle: {
      display: 'block',
      paddingTop: 10,
      paddingLeft: 10,
      fontSize: 14,
      lineHeight: '14px'
  },
  wrData: {
      fontSize: '3em'
  },
  rightPanel: {
      display: 'inline-block',
      width: '50%',
      height: '156px',
      verticalAlign: 'top'
  },
  rpTitle: {
      display: 'block',
      paddingTop: '10px',
      paddingLeft: '10px',
      fontSize: '14px',
      lineHeight: '14px'
  },
  rpData: {
    display: 'block',
    lineHeight: '26px',
    fontSize: '3em'
  }
};
