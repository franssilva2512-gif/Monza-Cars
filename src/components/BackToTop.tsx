import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#303030]/90 hover:bg-[#E4E0D8] text-[#E4E0D8] hover:text-[#161616] shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border border-[#686868]/40 cursor-pointer"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
