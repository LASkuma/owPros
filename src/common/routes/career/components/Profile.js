import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NameTag from './NameTag';
import Overview from './Overview';
import UpdateButton from './UpdateButton';

const Profile = ({ player, isFetching }) => {
  return (
    <div>
      <NameTag name={player.name} />
      <Overview {...player.overview} />
      <div style={{textAlign: 'center', height: 60}}>
        <UpdateButton isFetching={isFetching} hasError={false} />
      </div>
    </div>
  )
};

Profile.propTypes = {
  player: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const getIntValue = (str) => {
  if (typeof str === 'undefined') {
    return 0;
  }
  return parseInt(str.replace(/,/g, ""));
};

const getName = (name) => {
  return name.substring(0, name.indexOf('-'));
};

const getPlayer = (name, player) => {
  if (typeof player === 'undefined') {
    return {
      name: getName(name),
      overview: {
        winRate: '--',
        kd: '--',
        spm: '--'
      }
    };
  }
  const won = getIntValue(player.stats['Games Won']);
  const games = getIntValue(player.stats['Games Played']);
  const kill = getIntValue(player.stats['Eliminations']);
  const death = getIntValue(player.stats['Deaths']);
  const score = getIntValue(player.stats['Score']);

  return {
    name: getName(name),
    overview: {
      winRate: ((won / games) * 100).toFixed(2) + '%',
      kd: (kill / death).toFixed(2),
      spm: (score / games).toFixed(2)
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    player: getPlayer(ownProps.params.battletag, state.currentStats.stats[0]),
    isFetching: state.currentStats.isFetching
  }
};

export default withRouter(connect(mapStateToProps)(Profile));
