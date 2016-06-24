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
          <div style={style.card}>
            <CardHeader title="概况" />
            <NameTag name="LASkuma" />
            <Overview winRate="49.8%" kd="2.41" spm="2000" />
          </div>
        </div>
        <div className="nine columns">
          <div style={style.card}>
            <CardHeader title="常用英雄" />
            <table className="u-full-width stripped" style={{color:'white'}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dave Gamache</td>
                  <td>26</td>
                  <td>Male</td>
                  <td>San Francisco</td>
                </tr>
                <tr>
                  <td>Dwayne Johnson</td>
                  <td>42</td>
                  <td>Male</td>
                  <td>Hayward</td>
                </tr>
                <tr>
                  <td>Dave Gamache</td>
                  <td>26</td>
                  <td>Male</td>
                  <td>San Francisco</td>
                </tr>
                <tr>
                  <td>Dwayne Johnson</td>
                  <td>42</td>
                  <td>Male</td>
                  <td>Hayward</td>
                </tr>
                <tr>
                  <td>Dave Gamache</td>
                  <td>26</td>
                  <td>Male</td>
                  <td>San Francisco</td>
                </tr>
                <tr>
                  <td>Dwayne Johnson</td>
                  <td>42</td>
                  <td>Male</td>
                  <td>Hayward</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default provideHooks(redial)(connect()(careerPage))

const style = {
  card: {
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'
  }
}
