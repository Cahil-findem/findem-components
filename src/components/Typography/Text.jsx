import React from 'react';
import PropTypes from 'prop-types';
import '../../tokens/typography.css';

const Text = ({ 
  variant = 'default', 
  as = 'p', 
  children, 
  className = '', 
  ...props 
}) => {
  const Component = as;
  const baseClass = `findem-text-${variant}`;
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    'lead-medium',
    'lead',
    'default-medium',
    'default',
    'data-medium',
    'data',
    'detail-medium',
    'detail',
    'label'
  ]),
  as: PropTypes.oneOf(['p', 'span', 'div', 'strong', 'em', 'small']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;