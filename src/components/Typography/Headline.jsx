import React from 'react';
import PropTypes from 'prop-types';
import '../../tokens/typography.css';

const Headline = ({ 
  variant = 'default', 
  as = 'h2', 
  children, 
  className = '', 
  ...props 
}) => {
  const Component = as;
  const baseClass = `findem-headline-${variant}`;
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Headline.propTypes = {
  variant: PropTypes.oneOf([
    'xl',
    'large-medium', 
    'large',
    'default',
    'special-medium',
    'special'
  ]),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Headline;