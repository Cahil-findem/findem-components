import React from 'react';
import PropTypes from 'prop-types';
import ColorSwatch from './ColorSwatch';

const ColorPalette = ({ 
  title, 
  colors = [], 
  size = 'medium'
}) => {
  const containerStyle = {
    marginBottom: '32px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '500',
    color: '#101828',
    marginBottom: '16px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '16px'
  };

  return (
    <div style={containerStyle}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      <div style={gridStyle}>
        {colors.map((color, index) => (
          <ColorSwatch
            key={`${color.name}-${index}`}
            color={color.color}
            name={color.name}
            value={color.value}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};

ColorPalette.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default ColorPalette;