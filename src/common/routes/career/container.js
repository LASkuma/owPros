import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { getStats } from './actions';
import Layout from '../../components/Layout';
import CardHeader from './components/CardHeader';
import NameTag from './components/NameTag';
import Overview from './components/Overview';

const redial = {
  defer: ({ dispatch , params }) => dispatch(getStats(params))
};

const careerPage = () => {
  return (
    <Layout dark={true}>
      <div className="row">
        <div className="three columns">
          <div style={{width: '100%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
            <CardHeader title="概况" />
            <NameTag name="LASkuma" />
            <Overview winRate="49.8%" kd="2.41" spm="2000" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default provideHooks(redial)(connect()(careerPage))
