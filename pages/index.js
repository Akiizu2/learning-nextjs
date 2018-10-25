import React, { Component } from 'react';
import { connect } from 'react-redux'
import Router from 'next/router'

import { Head } from '../feature'

class Index extends Component {

  state = {
    counter: 1
  }

  componentDidMount() {
    Router.push('/money-planner')
  }

  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {})(Index);