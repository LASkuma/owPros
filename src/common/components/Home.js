import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { queryStats } from '../actions';

const Home = ( { handleSubmit, stats }) => {
  return (
    <div>
      <h1>Op | OW Pros</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" /><input type="submit" value="Submit" />
      </form>
      <h2>{stats.length}</h2>
    </div>
  )
}

Home.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  stats: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    stats: state.currentStats.stats
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      dispatch(queryStats('LASkuma-1824'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
