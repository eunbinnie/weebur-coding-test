'use client';

import { useEffect, useState } from 'react';

import { ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [show]);

  return (
    <>
      {visible && (
        <button
          onClick={handleScrollToTop}
          className={cn(
            'fixed bottom-4 right-4 rounded-full bg-black p-3 shadow-custom-shadow',
            show ? 'animate-fade-up' : 'animate-fade-down',
          )}
        >
          <ChevronUp color='white' />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
