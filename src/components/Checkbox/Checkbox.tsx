import React from 'react';
import clsx from 'clsx';
import styles from './checkbox.module.scss';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Checkbox = ({ checked, onChange, disabled, label, className }: CheckboxProps) => {
  return (
    <label className={clsx(styles.checkboxWrapper, className, { [styles.disabled]: disabled })}>
      <div
        className={clsx(styles.checkbox, { [styles.checked]: checked })}
        onClick={() => !disabled && onChange(!checked)}
      />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
