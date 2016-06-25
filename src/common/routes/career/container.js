import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { getStats } from './actions';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import NameTag from './components/NameTag';
import Overview from './components/Overview';
import FrequentUsedHeroes from './components/FrequentUsedHeroes';
import Profile from './components/Profile';

const redial = {
  defer: ({ dispatch , params }) => dispatch(getStats(params))
};

const careerPage = () => {
  return (
    <Layout dark={true}>
      <div className="row">
        <div className="four columns">
          <Card title="概况">
            <Profile />
          </Card>
        </div>
        <div className="eight columns">
          <Card title="常用英雄">
            <FrequentUsedHeroes />
          </Card>
        </div>
      </div>
    </Layout>
  )
};

export default provideHooks(redial)(connect()(careerPage));
