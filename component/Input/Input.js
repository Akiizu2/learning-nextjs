import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './input.module.scss'

class Input extends Component {
  state = {
    isFocusing: false,
  }

  static defaultProps = {
    label: 'Label',
    hinttext: '',
  }

  static propTypes = {
    inputref: PropTypes.any
  }

  _onFocus = () => {
    this.setState({ isFocusing: true })
  }

  _onBlur = () => {
    this.setState({ isFocusing: false })
  }

  render() {
    const { isFocusing } = this.state
    const haveValue = this.props.inputref.current && !!this.props.inputref.current.value
    return (
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            ref={this.props.inputref}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            {...this.props}
          />
          <div
            className={`${styles.label} ${(isFocusing || haveValue) ? styles.focusing : ''}`}>
            {this.props.label}
          </div>
        </div>
        <div className={styles.hintText}>{this.props.hinttext}</div>
      </div>
    );
  }
}

export default Input;