import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  variant = 'primary',
  size = 'medium', 
  state = 'idle',
  label = 'Button',
  iconStart,
  iconEnd,
  ...props 
}) => {
  const classes = [
    'findem-button',
    `findem-button--${variant}`,
    `findem-button--${size}`,
    `findem-button--${state}`
  ].join(' ');

  return (
    <button
      type="button"
      className={classes}
      {...props}
    >
      {iconStart && <span className="findem-button__icon findem-button__icon--start">{iconStart}</span>}
      <span className="findem-button__label">{label}</span>
      {iconEnd && <span className="findem-button__icon findem-button__icon--end">{iconEnd}</span>}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['idle', 'hover', 'active', 'disabled']),
  label: PropTypes.string,
  iconStart: PropTypes.string,
  iconEnd: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;