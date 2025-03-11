import React, { ChangeEvent, useState } from 'react';

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
  variant = 'standard',
  error = false,
  disabled = false,
  helperText,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          [styles.labelFloat]: isFocused || inputValue,
          [styles.labelFocused]: !error && isFocused,
          [styles.labelFloatStandard]: variant === 'standard' && (error || isFocused || inputValue),
          [styles.labelFloatFilled]: variant === 'filled' && (error || isFocused || inputValue),
          [styles.labelFloatOutlined]: variant === 'outlined' && (error || isFocused || inputValue),
          [styles.labelStandart]: variant === 'standard',
          [styles.labelFilled]: variant === 'filled',
          [styles.labelOutlined]: variant === 'outlined',
        })}
      >
        {error ? 'Error' : label}
      </label>

      <input
        type="text"
        className={clsx([styles.input], {
          [styles.inputStandard]: variant === 'standard',
          [styles.inputFilled]: variant === 'filled',
          [styles.inputOutlined]: variant === 'outlined',
        })}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={inputValue}
        disabled={disabled}
      />
      {error && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default TextInput;
