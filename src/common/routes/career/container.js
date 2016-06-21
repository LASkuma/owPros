import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { getStats } from './actions';

const redial = {
  defer: ({ dispatch , params }) => dispatch(getStats(params))
}

const careerPage = () => {
  return (
    <h1>Career</h1>
  )
}

export default provideHooks(redial)(connect()(careerPage))
