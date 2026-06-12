import React, { useEffect } from 'react';
import MenuBook from '../components/sections/MenuBook';

const MenuPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <MenuBook />
    </div>
  );
};

export default MenuPage;
