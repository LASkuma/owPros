import React, { Component, PropTypes } from 'react';
import { provideHooks } from 'redial';
import { getStats, prefetchStats } from './actions';
import Layout from '../../components/Layout';
import NameTag from './components/NameTag';
import Overview from './components/Overview';
import FrequentUsedHeroes from './components/FrequentUsedHeroes';
import Profile from './components/Profile';

const redial = {
  fetch: ({ dispatch, params }) => dispatch(prefetchStats(params)),
  defer: ({ dispatch, params }) => dispatch(getStats(params))
};

const careerPage = () => {
  return (
    <Layout dark={true}>
      <div className="row">
        <div className="four columns">
          <Profile />
        </div>
        <div className="eight columns">
          <FrequentUsedHeroes />
        </div>
      </div>
    </Layout>
  )
};

export default provideHooks(redial)(careerPage);
