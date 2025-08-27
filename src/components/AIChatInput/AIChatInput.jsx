import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './AIChatInput.css';

const AIChatInput = ({ 
  placeholder = "Describe who you are looking for",
  onSubmit,
  showThinking = false,
  onToggleThinking,
  disabled = false,
  ...props 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !disabled) {
      onSubmit?.(inputValue.trim());
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const hasValue = inputValue.trim().length > 0;
  const sendButtonVariant = hasValue && !disabled ? 'primary' : 'secondary';
  const sendButtonDisabled = !hasValue || disabled;

  return (
    <div className="findem-ai-chat-input">
      <form onSubmit={handleSubmit} className="findem-ai-chat-form">
        <div className="findem-ai-input-row">
          {focused && (
            <div className="findem-ai-input-cursor" />
          )}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className="findem-ai-input-field"
            disabled={disabled}
            {...props}
          />
        </div>
        
        <div className="findem-ai-actions-row">
          <div className="findem-ai-left-actions">
            <Button
              variant="secondary"
              size="small"
              iconStart="add"
              disabled={disabled}
              type="button"
            />
            <Button
              variant="secondary"
              size="small"
              iconStart="lightbulb"
              label="Show Thinking"
              disabled={disabled}
              type="button"
              onClick={onToggleThinking}
            />
            <Button
              variant="secondary"
              size="small"
              iconStart="tune"
              disabled={disabled}
              type="button"
            />
          </div>
          
          <div className="findem-ai-right-actions">
            <Button
              variant="secondary"
              size="small"
              iconStart="mic"
              disabled={disabled}
              type="button"
            />
            <Button
              variant={sendButtonVariant}
              size="small"
              iconStart="arrow_upward"
              disabled={sendButtonDisabled}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

AIChatInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  showThinking: PropTypes.bool,
  onToggleThinking: PropTypes.func,
  disabled: PropTypes.bool,
};

export default AIChatInput;