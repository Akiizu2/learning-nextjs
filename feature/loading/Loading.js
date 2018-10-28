import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './loading.module.scss'

class Loading extends Component {

  static defaultProps = {
    isInitial: false,
    isLoadingAnimated: false,
  }

  static propTypes = {
    isInitial: PropTypes.bool,
    isLoadingAnimated: PropTypes.bool,
  }

  render() {
    const {
      isInitial,
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