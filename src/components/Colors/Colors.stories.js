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
  { name: 'Default Border', color: '#dcdfe4', value: '#dcdfe4' },
  { name: 'Secondary Border', color: '#eaecf0', value: '#eaecf0' }
];


const purpleColors = [
  { name: 'Primary Purple', color: '#735BF3', value: '#735BF3' },
  { name: 'Dark Purple', color: '#5B3FF0', value: '#5B3FF0' },
  { name: 'Medium Purple', color: '#E5DFFF', value: '#E5DFFF' },
  { name: 'Light Purple', color: '#F6F4FF', value: '#F6F4FF' }
];

const greenColors = [
  { name: 'Primary Green', color: '#6BCA85', value: '#6BCA85' },
  { name: 'Dark Green', color: '#207C39', value: '#207C39' },
  { name: 'Medium Green', color: '#92D8A5', value: '#92D8A5' },
  { name: 'Light Green', color: '#E0FFE9', value: '#E0FFE9' }
];

const orangeColors = [
  { name: 'Primary Orange', color: '#F79009', value: '#F79009' },
  { name: 'Dark Orange', color: '#B54708', value: '#B54708' },
  { name: 'Medium Orange', color: '#FEC84B', value: '#FEC84B' },
  { name: 'Light Orange', color: '#FFFAE5', value: '#FFFAE5' }
];

const redColors = [
  { name: 'Primary Red', color: '#F04438', value: '#F04438' },
  { name: 'Dark Red', color: '#B42318', value: '#B42318' },
  { name: 'Medium Red', color: '#FDA29B', value: '#FDA29B' },
  { name: 'Light Red', color: '#FEF3F2', value: '#FEF3F2' }
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

function PurpleColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Purple (AI/Special) Colors',
    colors: purpleColors
  });
}

function GreenColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Green (Success) Colors',
    colors: greenColors
  });
}

function OrangeColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Orange (Warning) Colors',
    colors: orangeColors
  });
}

function RedColorsRender() {
  return React.createElement(ColorPalette, {
    title: 'Red (Error) Colors',
    colors: redColors
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
      title: 'Purple (AI/Special) Colors',
      colors: purpleColors
    }),
    React.createElement(ColorPalette, {
      title: 'Green (Success) Colors',
      colors: greenColors
    }),
    React.createElement(ColorPalette, {
      title: 'Orange (Warning) Colors',
      colors: orangeColors
    }),
    React.createElement(ColorPalette, {
      title: 'Red (Error) Colors',
      colors: redColors
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

export const PurpleColors = {
  render: PurpleColorsRender
};

export const GreenColors = {
  render: GreenColorsRender
};

export const OrangeColors = {
  render: OrangeColorsRender
};

export const RedColors = {
  render: RedColorsRender
};

export const AllColors = {
  render: AllColorsRender
};