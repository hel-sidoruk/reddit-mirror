import React from 'react';

export const BackToTopButton = ({ elemRef }: { elemRef?: React.RefObject<HTMLElement> }) => {
  return (
    <button
      className="back-btn"
      onClick={(e) => {
        e.stopPropagation();
        (elemRef && elemRef.current ? elemRef.current : window).scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      Back to top
    </button>
  );
};
