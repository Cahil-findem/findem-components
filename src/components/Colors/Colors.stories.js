import React from 'react';
import { ColorSwatch, ColorPalette } from './';

export default {
  title: 'Findem Components/Colors',
  component: ColorSwatch,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
};

const primaryColors = [
  { name: 'Primary Blue', color: '#4599FA', value: '#4599FA' },
  { name: 'Dark Blue', color: '#0F42BC', value: '#0F42BC' },
  { name: 'Medium Blue', color: '#167FF9', value: '#167FF9' },
  { name: 'Light Blue', color: '#E1EFFF', value: '#E1EFFF' }
];

const textColors = [
  { name: 'Title Text', color: '#101828', value: '#101828' },
  { name: 'Secondary Title', color: '#465366', value: '#465366' },
  { name: 'Tertiary Text', color: '#667085', value: '#667085' },
  { name: 'Muted Text', color: '#969dad', value: '#969dad' }
];

const backgroundColors = [
  { name: 'New Background', color: '#fcfcfd', value: '#fcfcfd' },
  { name: 'Secondary BG', color: '#f9fafb', value: '#f9fafb' },
  { name: 'Table Header', color: '#f3f5f8', value: '#f3f5f8' },
  { name: 'Hover', color: '#f2f4f7', value: '#f2f4f7' }
];

const borderColors = [
  { name: 'Default Border', color: '#dcdfe', value: '#dcdfe' },
  { name: 'Secondary Border', color: '#eaecf0', value: '#eaecf0' }
];

const activeColors = [
  { name: 'Active Darker', color: '#167ff9', value: '#167ff9' },
  { name: 'Active Lighter', color: '#92d8a5', value: '#92d8a5' },
  { name: 'Active Lightest', color: '#e1efff', value: '#e1efff' }
];

const successColors = [
  { name: 'Success Darker', color: '#54b06d', value: '#54b06d' },
  { name: 'Success Lightest', color: '#e0ffe9', value: '#e0ffe9' }
];

const errorColors = [
  { name: 'Error Darker', color: '#f17c4b', value: '#f17c4b' },
  { name: 'Error Lighter', color: '#ffbfa3', value: '#ffbfa3' },
  { name: 'Error Lightest', color: '#ffede5', value: '#ffede5' }
];

const warningColors = [
  { name: 'Warning Darker', color: '#856a00', value: '#856a00' },
  { name: 'Warning Lighter', color: '#ffe066', value: '#ffe066' },
  { name: 'Warning Lightest', color: '#fffae5', value: '#fffae5' }
];

const specialColors = [
  { name: 'Special Darker', color: '#9370bd', value: '#9370bd' },
  { name: 'Special Lighter', color: '#c9b3e5', value: '#c9b3e5' },
  { name: 'Special Lightest', color: '#f1e5ff', value: '#f1e5ff' }
];

export const SingleSwatch = {
  args: {
    color: '#4599FA',
    name: 'Primary Blue',
    value: '#4599FA'
  }
};

function PrimaryColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Primary Colors',
    colors: primaryColors
  });
}

function TextColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Text Colors',
    colors: textColors
  });
}

function BackgroundColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Background Colors',
    colors: backgroundColors
  });
}

function BorderColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Border Colors',
    colors: borderColors
  });
}

function ActiveColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Active State Colors',
    colors: activeColors
  });
}

function SuccessColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Success State Colors',
    colors: successColors
  });
}

function ErrorColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Error State Colors',
    colors: errorColors
  });
}

function WarningColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Warning State Colors',
    colors: warningColors
  });
}

function SpecialColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Special State Colors',
    colors: specialColors
  });
}

function AllColorsRender() {
  return React.createElement('div', null,
    React.createElement(ColorPalette, {
      title: 'Primary Colors (Branding)',
      colors: primaryColors
    }),
    React.createElement(ColorPalette, {
      title: 'Text Colors',
      colors: textColors
    }),
    React.createElement(ColorPalette, {
      title: 'Background Colors',
      colors: backgroundColors
    }),
    React.createElement(ColorPalette, {
      title: 'Border Colors',
      colors: borderColors
    }),
    React.createElement(ColorPalette, {
      title: 'Active State Colors',
      colors: activeColors
    }),
    React.createElement(ColorPalette, {
      title: 'Success State Colors',
      colors: successColors
    }),
    React.createElement(ColorPalette, {
      title: 'Error State Colors',
      colors: errorColors
    }),
    React.createElement(ColorPalette, {
      title: 'Warning State Colors',
      colors: warningColors
    }),
    React.createElement(ColorPalette, {
      title: 'Special State Colors',
      colors: specialColors
    })
  );
}

export const PrimaryColors = {
  render: PrimaryColorsRender
};

export const TextColors = {
  render: TextColorsRender
};

export const BackgroundColors = {
  render: BackgroundColorsRender
};

export const BorderColors = {
  render: BorderColorsRender
};

export const ActiveColors = {
  render: ActiveColorsRender
};

export const SuccessColors = {
  render: SuccessColorsRender
};

export const ErrorColors = {
  render: ErrorColorsRender
};

export const WarningColors = {
  render: WarningColorsRender
};

export const SpecialColors = {
  render: SpecialColorsRender
};

export const AllColors = {
  render: AllColorsRender
};