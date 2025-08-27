import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatch = ({ 
  color, 
  name, 
  value, 
  size = 'medium'
}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  };

  const swatchStyle = {
    backgroundColor: color,
    borderRadius: '8px',
    border: '1px solid #eaecf0',
    width: size === 'small' ? '40px' : size === 'large' ? '120px' : '80px',
    height: size === 'small' ? '40px' : size === 'large' ? '120px' : '80px'
  };

  const nameStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: '#465366',
    textAlign: 'center'
  };

  const valueStyle = {
    fontSize: '12px',
    color: '#969dad',
    fontFamily: 'monospace'
  };

  return (
    <div style={containerStyle}>
      <div style={swatchStyle} title={`${name}: ${value}`} />
      <div style={nameStyle}>{name}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default ColorSwatch;