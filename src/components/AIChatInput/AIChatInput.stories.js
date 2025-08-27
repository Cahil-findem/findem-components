import AIChatInput from './AIChatInput';

export default {
  title: 'Findem Components/AI Chat Input',
  component: AIChatInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showLeftActions: { control: 'boolean' },
    showVoiceButton: { control: 'boolean' },
    onSubmit: { action: 'submitted' },
  },
};

export const Default = {
  args: {
    placeholder: 'Describe who you are looking for',
    onSubmit: (message) => console.log('Submitted:', message),
  },
};

export const Loading = {
  args: {
    placeholder: 'Describe who you are looking for',
    isLoading: true,
    onSubmit: (message) => console.log('Submitted:', message),
  },
};

export const Disabled = {
  args: {
    placeholder: 'Input is disabled',
    disabled: true,
    onSubmit: (message) => console.log('Submitted:', message),
  },
};

export const MinimalActions = {
  args: {
    placeholder: 'Minimal version with no left actions',
    showLeftActions: false,
    onSubmit: (message) => console.log('Submitted:', message),
  },
};

export const NoVoiceButton = {
  args: {
    placeholder: 'Version without voice button',
    showVoiceButton: false,
    onSubmit: (message) => console.log('Submitted:', message),
  },
};

export const CustomPlaceholder = {
  args: {
    placeholder: 'Ask me anything about your search...',
    onSubmit: (message) => console.log('Submitted:', message),
  },
};