import React from 'react';
import { Text } from './';

export default {
  title: 'Findem Components/Typography/Text',
  component: Text,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Text component with various typography scales from the Findem design system.'
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

export const LeadMedium = {
  args: {
    variant: 'lead-medium',
    children: 'This is lead medium text (16px, 500) used for important paragraphs and introductory content.',
  },
};

export const Lead = {
  args: {
    variant: 'lead',
    children: 'This is lead text (16px, 400) used for important paragraphs and introductory content.',
  },
};

export const DefaultMedium = {
  args: {
    variant: 'default-medium',
    children: 'This is default medium text (14px, 500) used for standard content with emphasis.',
  },
};

export const Default = {
  args: {
    variant: 'default',
    children: 'This is default text (14px, 400) used for standard body content and general text.',
  },
};

export const DataMedium = {
  args: {
    variant: 'data-medium',
    children: 'This is data medium text (13px, 500) used for data displays and tables.',
  },
};

export const Data = {
  args: {
    variant: 'data',
    children: 'This is data text (13px, 400) used for data displays and tables.',
  },
};

export const DetailMedium = {
  args: {
    variant: 'detail-medium',
    children: 'This is detail medium text (12px, 500) used for small details and metadata.',
  },
};

export const Detail = {
  args: {
    variant: 'detail',
    children: 'This is detail text (12px, 400) used for small details and metadata.',
  },
};

export const Label = {
  args: {
    variant: 'label',
    as: 'span',
    children: 'Form Label',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text variant="lead-medium">Lead Medium (16px, 500) - Important introductory content</Text>
      <Text variant="lead">Lead (16px, 400) - Important introductory content</Text>
      <Text variant="default-medium">Default Medium (14px, 500) - Standard content with emphasis</Text>
      <Text variant="default">Default (14px, 400) - Standard body content</Text>
      <Text variant="data-medium">Data Medium (13px, 500) - Data displays and tables</Text>
      <Text variant="data">Data (13px, 400) - Data displays and tables</Text>
      <Text variant="detail-medium">Detail Medium (12px, 500) - Small details and metadata</Text>
      <Text variant="detail">Detail (12px, 400) - Small details and metadata</Text>
      <Text variant="label" as="span">LABEL TEXT (13px, 400, UPPERCASE)</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available text variants displayed together for comparison.'
      }
    }
  }
};

export const TypographyHierarchy = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <div>
        <Text variant="label" as="span">SECTION HEADER</Text>
        <Text variant="lead-medium">
          This is a lead medium paragraph that introduces the main content. 
          It has more visual weight to draw attention.
        </Text>
        <Text variant="default">
          This is regular body text that follows the lead paragraph. It provides 
          detailed information in a comfortable reading size.
        </Text>
        <Text variant="detail">
          Additional details or metadata can be shown in smaller detail text.
        </Text>
      </div>
      
      <div>
        <Text variant="label" as="span">DATA SECTION</Text>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
          <Text variant="data-medium">Revenue:</Text>
          <Text variant="data">$1,234,567</Text>
          <Text variant="data-medium">Growth:</Text>
          <Text variant="data">+12.3%</Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how different text variants work together in a typical content hierarchy.'
      }
    }
  }
};