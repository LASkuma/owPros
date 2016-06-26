import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from '../../../components/Table';
import Card from '../../../components/Card';
import HeroIcon from './HeroIcon';

const FrequentUsedHeroes = ({ frequentHeroes, hasError, errorMessage, isFetching }) => {
  if (hasError) {
    return (
      <Card title="出错了" type="error">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200, backgroundColor: 'white'}}>
          <p style={{paddingLeft: 10, paddingRight: 10}}>{errorMessage}</p>
        </div>
      </Card>
    )
  }
  if (frequentHeroes.length === 0) {
    return (
      <div></div>
    );
  }
  return (
    <Card title="常用英雄">
      <Table heads={tableHead} data={frequentHeroes.slice(0, 5)} />
    </Card>
  );
}

const tableHead = ['英雄','场次','胜率','K/D','场均得分'];

const getIntValue = (str) => {
  if (typeof str === 'undefined') {
    return 0;
  }
  return parseInt(str.replace(/,/g, ""));
};

const getFrequentHeroes = (heroes) => {
  let raw = heroes.reduce((prev, curr, i) => {
    if (i === 0) {
      return prev;
    }
    prev.push({
      id: curr.id,
      games: getIntValue(curr.stats['Games Played']),
      gamesWon: getIntValue(curr.stats['Games Won']),
      eliminations: getIntValue(curr.stats['Eliminations']),
      deaths: getIntValue(curr.stats['Deaths']),
      score: getIntValue(curr.stats['Score'])
    });
    return prev;
  }, []);

  const compare = (a, b) => {
    if (a.games < b.games) {
      return 1;
    } else if (a.games > b.games) {
      return -1;
    }
    return 0;
  }

  raw = raw.sort(compare);

  return raw.reduce((prev, curr, i) => {
    prev.push([
      <HeroIcon id={curr.id} />,
      curr.games,
      curr.games === 0 ? '--' : ((curr.gamesWon / curr.games) * 100).toFixed(2) + '%',
      curr.games === 0 ? '--' : (curr.eliminations / curr.deaths).toFixed(2),
      curr.games === 0 ? '--' : (curr.score / curr.games).toFixed(2)
    ]);
    return prev;
  }, []);

};

const hasError = (error, stats) => {
  return typeof error.message !== 'undefined' && stats.length === 0;
};

const mapStateToProps = (state) => {
  return {
    frequentHeroes: getFrequentHeroes(state.currentStats.stats),
    hasError: hasError(state.currentStats.error, state.currentStats.stats),
    errorMessage: state.currentStats.error.message,
    isFetching: state.currentStats.isFetching
  }
};

export default connect(mapStateToProps)(FrequentUsedHeroes);
