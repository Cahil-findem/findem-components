import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  primary = false, 
  size = 'medium', 
  backgroundColor, 
  label, 
  ...props 
}) => {
  const mode = primary ? 'findem-button--primary' : 'findem-button--secondary';
  return (
    <button
      type="button"
      className={['findem-button', `findem-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;