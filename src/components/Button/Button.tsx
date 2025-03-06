import React from 'react';

import styles from './button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = 'medium',
  variant = 'contained',
  disabled = false,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        {
          [styles.buttonSmall]: size === 'small',
          [styles.buttonMedium]: size === 'medium',
          [styles.buttonLarge]: size === 'large',
        },
        {
          [styles.buttonText]: variant === 'text',
          [styles.buttonContained]: variant === 'contained',
          [styles.buttonOutlined]: variant === 'outlined',
        },
        disabled && styles.disabled
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
