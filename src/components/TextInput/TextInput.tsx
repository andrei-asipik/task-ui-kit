import React from 'react';

import styles from './textInput.module.scss';
import clsx from 'clsx';

export interface TextInputProps {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  variant?: 'standard' | 'filled' | 'outlined';
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
}

const TextInput = ({
  label,
  value = '',
  onChange,
  isFocused,
  onFocus,
  onBlur,
  variant = 'standard',
  error = false,
  disabled = false,
  helperText,
}: TextInputProps) => {
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
          [styles.labelFloat]: isFocused || !!value,
          [styles.labelFocused]: !error && isFocused,
          [styles.labelFloatStandard]: variant === 'standard' && (error || isFocused || !!value),
          [styles.labelFloatFilled]: variant === 'filled' && (error || isFocused || !!value),
          [styles.labelFloatOutlined]: variant === 'outlined' && (error || isFocused || !!value),
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
        value={value}
        disabled={disabled}
      />
      {error && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default TextInput;
