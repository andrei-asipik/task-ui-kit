import React, { ReactNode } from 'react';

import styles from './button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
  // backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({
  children,
  size = 'medium',
  variant = 'contained',
  disabled = false,
  // backgroundColor,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
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
      // style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
