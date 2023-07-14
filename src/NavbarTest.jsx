import React, { useEffect, useState } from 'react';

const NavbarTest = () => {
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 transform transition-transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      Navbar content
    </nav>
  );
};

export default NavbarTest;
