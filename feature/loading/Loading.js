import React, { Component } from 'react';

import styles from './loading.module.scss'

class Loading extends Component {
  state = {}
  render() {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>
          <div className={styles.loadingLogo}>
            <div className={styles.ldsRipple}><div></div><div></div></div>
          </div>
          <div className={styles.loadingText}> Loading... </div>
        </div>
      </div>
    );
  }
}

export default Loading;