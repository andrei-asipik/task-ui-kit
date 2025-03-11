import React from 'react';
import clsx from 'clsx';
import styles from './switch.module.scss';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Switch = ({ checked, onChange, disabled = false, label, className }: SwitchProps) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={clsx(styles.switchWrapper, className)}>
      <div
        onClick={handleChange}
        className={clsx(styles.slider, {
          [styles.checked]: checked,
          [styles.disabled]: disabled,
        })}
      >
        <div className={styles.knob} />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default Switch;
