import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { queryRegionChange } from '../actions';

const Home = ( { handleRegionChange, region, regionText, router }) => {
  return (
    <div>
      <h1>Op | OW Pros</h1>
      <input type='text' ref={node => {
        this.input = node;
      }}/>
      <button onClick={handleRegionChange}>{regionText}</button>
      <button onClick={() => router.push(`/career/${region}/${this.input.value}`)}>查询</button>
    </div>
  )
}

Home.propTypes = {
  handleRegionChange: PropTypes.func.isRequired,
  region: PropTypes.string.isRequired,
  regionText: PropTypes.string.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
}

const getRegionText = (region) => {
  switch(region) {
    case 'us':
      return '美服';

    default:
      return '国服';
  }
}

const mapStateToProps = (state) => {
  return {
    region: state.query.region,
    regionText: getRegionText(state.query.region)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegionChange: () => dispatch(queryRegionChange())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
