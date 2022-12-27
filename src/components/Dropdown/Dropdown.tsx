import React, { useState } from 'react';
import styles from './dropdown.module.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Dropdown({ button, children }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
