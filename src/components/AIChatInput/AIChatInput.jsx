import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './AIChatInput.css';

const AIChatInput = ({ 
  placeholder = "Describe who you are looking for",
  onSubmit,
  isLoading = false,
  disabled = false,
  showLeftActions = true,
  showVoiceButton = true,
  ...props 
}) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading && !disabled) {
      onSubmit?.(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleAddClick = () => {
    console.log('Add button clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings button clicked');
  };

  const handleVoiceClick = () => {
    console.log('Voice button clicked');
  };

  const sendButtonClass = message.trim() && !isLoading && !disabled ? 'active' : 'inactive';

  return (
    <div className="findem-ai-input-area">
      <form onSubmit={handleSubmit} className="findem-ai-input-card">
        <div className="findem-ai-input-content">
          <div className="findem-input-row">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="findem-ai-input-field"
              disabled={isLoading || disabled}
              {...props}
            />
          </div>

          <div className="findem-action-row">
            {showLeftActions && (
              <div className="findem-left-actions">
                <button 
                  type="button" 
                  className="findem-icon-button" 
                  aria-label="Add"
                  onClick={handleAddClick}
                  disabled={disabled}
                >
                  <span className="material-icons">add</span>
                </button>
                <button 
                  type="button" 
                  className="findem-icon-button" 
                  aria-label="Settings"
                  onClick={handleSettingsClick}
                  disabled={disabled}
                >
                  <span className="material-icons">tune</span>
                </button>
              </div>
            )}

            <div className="findem-right-actions">
              {showVoiceButton && (
                <button 
                  type="button" 
                  className="findem-icon-button" 
                  aria-label="Voice input"
                  onClick={handleVoiceClick}
                  disabled={disabled}
                >
                  <span className="material-icons">mic</span>
                </button>
              )}
              <button 
                type="submit" 
                className={`findem-send-button ${sendButtonClass}`}
                disabled={!message.trim() || isLoading || disabled}
                aria-label="Send message"
              >
                <span className="material-icons">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

AIChatInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  showLeftActions: PropTypes.bool,
  showVoiceButton: PropTypes.bool,
};

export default AIChatInput;