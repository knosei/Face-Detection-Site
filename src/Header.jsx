import React, { useEffect, useState } from 'react';

const Header = () => {
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`flex justify-between items-center bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50
    transform transition-transform ${visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center">
        <div className="text-white text-lg font-bold">21faces</div>
      </div>
      <div className="flex items-center space-x-4 ">
        <a href="#" className="text-white hover:text-yellow-600 inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0e before:w-0 
          before:h-[1px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-white before:to-white 
          hover:before:w-full hover:before:opacity-100">Home
        </a>
        <a href="#" className="text-white hover:text-yellow-600 inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0e before:w-0 
          before:h-[1px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-white before:to-white 
          hover:before:w-full hover:before:opacity-100">About
        </a>
        <a href="#" className="text-white hover:text-yellow-600 inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0e before:w-0 
          before:h-[1px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-white before:via-white before:to-white 
          hover:before:w-full hover:before:opacity-100">FAQ
        </a>  
      </div>
      <div className='text-sm'>
        <p className="text- text-yellow-600">Faces Detected</p>
        <p className='text-center text-xs'>25,341</p>
      </div>
    </nav>

  )
}

export default Header