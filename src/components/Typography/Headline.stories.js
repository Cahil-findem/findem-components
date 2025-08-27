import React from 'react';
import { Headline } from './';

export default {
  title: 'Findem Components/Typography/Headline',
  component: Headline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Headline component with various typography scales from the Findem design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'Typography variant'
    },
    as: {
      control: { type: 'select' },
      description: 'HTML element to render'
    },
    children: {
      control: 'text',
      description: 'Content to display'
    }
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

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Headline variant="xl" as="h1">Extra Large Headline (36px)</Headline>
      <Headline variant="large-medium" as="h2">Large Medium Headline (24px, 600)</Headline>
      <Headline variant="large" as="h2">Large Headline (24px, 400)</Headline>
      <Headline variant="default" as="h3">Default Headline (18px, 500)</Headline>
      <Headline variant="special-medium" as="h4">Special Medium Headline</Headline>
      <Headline variant="special" as="h4">Special Headline</Headline>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available headline variants displayed together for comparison.'
      }
    }
  }
};