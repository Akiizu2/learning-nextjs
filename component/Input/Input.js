import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './input.module.scss'

class Input extends Component {
  state = {
    isFocusing: false,
    isFocused: false,
    isDirty: false,
  }

  static defaultProps = {
    label: 'Label',
    hint: '',
    error: '',
    onChange() { },
    onFocus() { },
    onBlur() { },
    onKeyPress() { },
  }

  static propTypes = {
    inputref: PropTypes.any,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
  }

  _onFocus = () => {
    this.setState({
      isFocusing: true
    }, () => {
      this.props.onFocus()
    })
  }

  _onBlur = () => {
    this.setState({
      isFocusing: false,
      isFocused: true
    }, () => {
      this.props.onBlur()
    })
  }

  _onChange = (e) => {
    this.setState({ isDirty: true }, () => {
      this.props.onChange(e)
    })
  }

  render() {
    const { isFocusing, isFocused, isDirty } = this.state
    const haveValue = this.props.inputref.current && !!this.props.inputref.current.value

    return (
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            dirty={`${isDirty}`}
            focused={`${isFocused}`}
            ref={this.props.inputref}
            onChange={this._onChange}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            type={this.props.type}
            onKeyPress={this.props.onKeyPress}
          />
          <div
            className={`${styles.label} ${(isFocusing || haveValue) ? styles.focusing : ''}`}>
            {this.props.label}
          </div>
        </div>
        <div className={`${styles.hintText} ${this.props.error !== '' ? styles.errorText : ''}`} >{this.props.hint || this.props.error}</div>
      </div>
    );
  }
}

export default Input;