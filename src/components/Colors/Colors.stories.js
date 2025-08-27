import React from 'react';
import { ColorSwatch, ColorPalette } from './';

export default {
  title: 'Findem Components/Colors',
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
};

const annotationColors = [
  { name: 'Primary', color: '#ff46aa', value: '#ff46aa' },
  { name: 'Dark', color: '#8f0c47', value: '#8f0c47' },
  { name: 'Medium', color: '#f0127f', value: '#f0127f' },
  { name: 'Light', color: '#ffcaeb', value: '#ffcaeb' }
];

const textColors = [
  { name: 'Title Text', color: '#101828', value: '#101828' },
  { name: 'Secondary Title', color: '#465366', value: '#465366' },
  { name: 'Tertiary Text', color: '#667085', value: '#667085' },
  { name: 'Muted Text', color: '#969dad', value: '#969dad' }
];

export const SingleSwatch = {
  args: {
    color: '#ff46aa',
    name: 'Primary',
    value: '#ff46aa'
  }
};

export const AnnotationColors = {
  render: function() {
    return React.createElement(ColorPalette, {
      title: 'Annotation Colors',
      colors: annotationColors
    });
  }
};

export const TextColors = {
  render: function() {
    return React.createElement(ColorPalette, {
      title: 'Text Colors',
      colors: textColors
    });
  }
};