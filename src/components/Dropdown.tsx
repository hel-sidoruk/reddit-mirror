import React, { useEffect, useState } from 'react';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Dropdown({ button, children }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setIsDropdownOpen(false);
    });
  }, []);

  return (
    <div className="container">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        {button}
      </div>
      <div
        className={`list ${isDropdownOpen ? 'opened' : ''}`}
        onClick={() => setIsDropdownOpen(false)}
      >
        {children}
      </div>
    </div>
  );
}
