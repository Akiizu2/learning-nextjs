import React, { Component } from 'react';

import { MoneyPlanner, Loading } from '../feature'

class MoneyPlannerPage extends Component {

  state = {}

  static async getInitialProps({ req }) {
    if (req) {
      return {
        test: 1234
      }
    }

  }

  render() {
    console.log('props=>', this.props)
    return (
      <MoneyPlanner  {...this.props} />
    );
  }
}

export default MoneyPlannerPage;