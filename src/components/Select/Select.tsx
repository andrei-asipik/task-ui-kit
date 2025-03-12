import React from 'react';
import clsx from 'clsx';
import styles from './select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isOpen: boolean;
  onFocus: () => void;
  onBlur: () => void;
  variant?: 'standard' | 'filled' | 'outlined';
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  required?: boolean;
}

const Select = ({
  label,
  options,
  value,
  onChange,
  isOpen,
  onFocus,
  onBlur,
  variant = 'standard',
  error = false,
  disabled = false,
  helperText,
}: SelectProps) => {
  return (
    <div
      className={clsx(styles.selectContainer, {
        [styles.error]: error,
        [styles.disabled]: disabled,
      })}
    >
      <label
        className={clsx(styles.label, {
          [styles.errorFloat]: error,
          [styles.labelFloat]: isOpen || !!value,
          [styles.labelFocused]: !error && isOpen,
          [styles.labelFloatStandard]: variant === 'standard' && (error || isOpen || !!value),
          [styles.labelFloatFilled]: variant === 'filled' && (error || isOpen || !!value),
          [styles.labelFloatOutlined]: variant === 'outlined' && (error || isOpen || !!value),
          [styles.labelStandart]: variant === 'standard',
          [styles.labelFilled]: variant === 'filled',
          [styles.labelOutlined]: variant === 'outlined',
        })}
      >
        {error ? 'Error' : label}
      </label>

      <select
        value={value ?? ''}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        className={clsx(styles.select, {
          [styles.errorBorder]: error,
          [styles.standard]: variant === 'standard',
          [styles.filled]: variant === 'filled',
          [styles.outlined]: variant === 'outlined',
        })}
      >
        {<option value="" disabled={!!value}></option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default Select;
