import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './loading.module.scss'

class Loading extends Component {

  static defaultProps = {
    isInitial: false,
    isComplete: false,
    isLoadingAnimated: false,
  }

  static propTypes = {
    isInitial: PropTypes.bool,
    isComplete: PropTypes.bool,
    isLoadingAnimated: PropTypes.bool,
  }

  render() {
    const {
      isInitial,
      isComplete,
      isLoadingAnimated,
    } = this.props
    return (
      <div className={styles.loadingContainer}>
        <div className={`${styles.loading} ${isLoadingAnimated ? styles.loadingAnimated : isInitial ? styles.initialState : ''}`}></div>
      </div>
    );
  }
}

export default Loading;