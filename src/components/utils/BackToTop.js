import { useEffect, useState } from 'react';
import {IoIosArrowDropup} from 'react-icons/io';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
    style={{backgroundColor: '#009970'}}
      onClick={scrollToTop}
      className={`${isVisible ? 'opacity-100' : 'opacity-0'} fixed bottom-4 right-4 z-10  text-white rounded-full p-2 transition-opacity duration-300  focus:outline-none`}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.293 5.293a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1-1.414 1.414L12 8.414l-2.793 2.793a1 1 0 0 1-1.414-1.414l3.5-3.5a1 1 0 0 1 0-1.414z" />
        <path fillRule="evenodd" d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V4z" />
      </svg> */}
      <IoIosArrowDropup size="30px"/>
    </button>
  );
};

export default ScrollTopButton;
