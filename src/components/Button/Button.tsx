import React, { ReactNode } from 'react';

import styles from './button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick: () => void;
  children?: ReactNode;
  className?: string;
}

const Button = ({
  children,
  size = 'medium',
  variant = 'contained',
  disabled = false,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[size],
        styles[variant],
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
