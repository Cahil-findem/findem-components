import React from 'react';
import { Text } from './';

export default {
  title: 'Findem Components/Typography/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['lead-medium', 'lead', 'default-medium', 'default', 'data-medium', 'data', 'detail-medium', 'detail', 'label'],
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div', 'strong', 'em', 'small'],
    },
  },
};

export const LeadMedium = {
  args: {
    variant: 'lead-medium',
    children: 'This is lead medium text used for important paragraphs.',
  },
};

export const Lead = {
  args: {
    variant: 'lead',
    children: 'This is lead text used for important paragraphs.',
  },
};

export const DefaultMedium = {
  args: {
    variant: 'default-medium',
    children: 'This is default medium text used for standard content with emphasis.',
  },
};

export const Default = {
  args: {
    variant: 'default',
    children: 'This is default text used for standard body content.',
  },
};

export const DataMedium = {
  args: {
    variant: 'data-medium',
    children: 'This is data medium text used for data displays.',
  },
};

export const Data = {
  args: {
    variant: 'data',
    children: 'This is data text used for data displays.',
  },
};

export const DetailMedium = {
  args: {
    variant: 'detail-medium',
    children: 'This is detail medium text used for small details.',
  },
};

export const Detail = {
  args: {
    variant: 'detail',
    children: 'This is detail text used for small details.',
  },
};

export const Label = {
  args: {
    variant: 'label',
    as: 'span',
    children: 'Form Label',
  },
};