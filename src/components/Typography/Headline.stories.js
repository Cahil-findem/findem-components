import React from 'react';
import { Headline } from './';

export default {
  title: 'Findem Components/Typography/Headline',
  component: Headline,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['xl', 'large-medium', 'large', 'default', 'special-medium', 'special'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span'],
    },
  },
};

export const ExtraLarge = {
  args: {
    variant: 'xl',
    as: 'h1',
    children: 'Extra Large Headline',
  },
};

export const LargeMedium = {
  args: {
    variant: 'large-medium',
    as: 'h2',
    children: 'Large Medium Headline',
  },
};

export const Large = {
  args: {
    variant: 'large',
    as: 'h2',
    children: 'Large Headline',
  },
};

export const Default = {
  args: {
    variant: 'default',
    as: 'h3',
    children: 'Default Headline',
  },
};

export const SpecialMedium = {
  args: {
    variant: 'special-medium',
    as: 'h4',
    children: 'Special Medium Headline',
  },
};

export const Special = {
  args: {
    variant: 'special',
    as: 'h4',
    children: 'Special Headline',
  },
};