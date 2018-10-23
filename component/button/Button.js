import React from 'react';
import PropTypes from 'prop-types'

import styles from './button.module.scss'

const Button = (props) => {
  const {
    outline,
    disabled,
    title,
    onClick,
  } = props
  const outlineStyle = outline ? styles.outline : ''
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.buttonContainer} ${outlineStyle}`}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
  disabled: false,
  title: 'Button',
  onClick() { },
}

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button;