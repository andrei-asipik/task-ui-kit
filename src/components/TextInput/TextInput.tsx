import React, { useState } from 'react';

import styles from './textInput.module.scss';
import clsx from 'clsx';

export interface TextInputProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'standard' | 'filled' | 'outlined';
  type?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
}

const TextInput = ({
  label,
  value = '',
  type = 'text',
  variant = 'standard',
  error = false,
  disabled = false,
  helperText,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // const isFocused = true;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      className={clsx(styles.textField, {
        [styles.error]: error,
        [styles.disabled]: disabled,
      })}
    >
      <label
        className={clsx(styles.label, {
          [styles.errorFloat]: error,
          [styles.labelFloat]: !error && (isFocused || value),
          [styles.labelFloatStandard]: variant === 'standard' && (error || isFocused || value),
          [styles.labelFloatFilled]: variant === 'filled' && (error || isFocused || value),
          [styles.labelFloatOutlined]: variant === 'outlined' && (error || isFocused || value),
          [styles.labelStandart]: variant === 'standard',
          [styles.labelFilled]: variant === 'filled',
          [styles.labelOutlined]: variant === 'outlined',
        })}
      >
        {error ? 'Error' : label}
      </label>

      <input
        type={type}
        className={clsx([styles.input], {
          [styles.errorBorder]: error,
          [styles.inputStandard]: variant === 'standard',
          [styles.inputFilled]: variant === 'filled',
          [styles.inputOutlined]: variant === 'outlined',
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        disabled={disabled}
      />
      {error && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default TextInput;
