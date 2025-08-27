import AIChatInput from './AIChatInput';

export default {
  title: 'Findem Components/AI Chat Input',
  component: AIChatInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AI Chat Input component with integrated action buttons and form submission handling.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { 
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    showThinking: { 
      control: 'boolean',
      description: 'Whether the Show Thinking button is active'
    },
    disabled: { 
      control: 'boolean',
      description: 'Disable the entire input component'
    },
    onSubmit: { 
      action: 'submitted',
      description: 'Callback fired when the form is submitted'
    },
    onToggleThinking: { 
      action: 'thinking-toggled',
      description: 'Callback fired when Show Thinking button is clicked'
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Describe who you are looking for',
    showThinking: false,
    disabled: false,
  },
};

export const WithThinking = {
  args: {
    placeholder: 'Describe who you are looking for',
    showThinking: true,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    placeholder: 'Input is disabled',
    showThinking: false,
    disabled: true,
  },
};

export const CustomPlaceholder = {
  args: {
    placeholder: 'Ask me anything about your search...',
    showThinking: false,
    disabled: false,
  },
};