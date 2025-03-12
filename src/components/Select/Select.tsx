import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'standard' | 'filled' | 'outlined';
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  required?: boolean;
}

const Select = ({
  label,
  options,
  value = '',
  onChange,
  variant = 'standard',
  error = false,
  disabled = false,
  helperText,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange?.(newValue);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };
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
          [styles.labelFloat]: isOpen || !!selectedValue,
          [styles.labelFocused]: !error && isOpen,
          [styles.labelFloatStandard]:
            variant === 'standard' && (error || isOpen || !!selectedValue),
          [styles.labelFloatFilled]: variant === 'filled' && (error || isOpen || !!selectedValue),
          [styles.labelFloatOutlined]:
            variant === 'outlined' && (error || isOpen || !!selectedValue),
          [styles.labelStandart]: variant === 'standard',
          [styles.labelFilled]: variant === 'filled',
          [styles.labelOutlined]: variant === 'outlined',
        })}
      >
        {error ? 'Error' : label}
      </label>

      <select
        value={selectedValue ?? ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={clsx(styles.select, {
          [styles.errorBorder]: error,
          [styles.standard]: variant === 'standard',
          [styles.filled]: variant === 'filled',
          [styles.outlined]: variant === 'outlined',
        })}
      >
        {<option value="" disabled={!!selectedValue}></option>}
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
