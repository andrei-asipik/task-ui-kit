import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, className, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={clsx(styles.modal, className)} onClick={handleModalClick}>
        {title && <div className={styles.header}>{title}</div>}
        <div className={styles.content}>{children}</div>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
