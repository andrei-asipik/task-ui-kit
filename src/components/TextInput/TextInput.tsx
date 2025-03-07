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

export const TextInput = ({
  label,
  value = '',
  onChange,
  type = 'text',
  variant = 'standard',
  error = false,
  disabled = false,
  helperText,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
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
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
      />
      {error && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
