import Button from './Button';

export default {
  title: 'Findem Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost']
    },
    size: { 
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    state: { 
      control: { type: 'select' },
      options: ['idle', 'hover', 'active', 'disabled']
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const WithIcons = {
  args: {
    variant: 'primary',
    label: 'Button',
    iconStart: 'star',
    iconEnd: 'close',
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Button',
  },
};

export const Medium = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Button',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    label: 'Button',
    iconStart: 'star',
    iconEnd: 'close',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    state: 'disabled',
    label: 'Disabled Button',
  },
};

