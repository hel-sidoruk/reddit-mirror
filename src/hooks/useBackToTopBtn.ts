import { useState, useEffect } from 'react';

export function useBackToTopBtn() {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight && !scrollToTop) {
        setScrollToTop(true);
      }
      if (window.scrollY < window.innerHeight && scrollToTop) {
        setScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollToTop]);

  return [scrollToTop];
}
