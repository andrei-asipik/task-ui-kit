import { FC, ReactNode } from 'react';
import styles from './MyButton.module.scss';
import clsx from 'clsx';


export interface MyButtonProps {
    color?: string;
    big?: boolean;
    children: ReactNode
}

export const MyButton: FC<MyButtonProps> = ({ children, color, big, ...props }) => {
    return (
      <button
        {...props}
        className={clsx(styles.myButton, {
          [styles.bigBtn]: big,
        })}
        style={{ color }}
      >
        {children}
      </button>
    );
  };

export default MyButton; 