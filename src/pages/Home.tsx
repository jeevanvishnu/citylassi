import React from 'react';
import Hero from '../components/sections/Hero';
import MarqueeBanner from '../components/sections/MarqueeBanner';
import About from '../components/sections/About';
import PopularDrinks from '../components/sections/PopularDrinks';
import FullMenu from '../components/sections/FullMenu';
import FeatureCards from '../components/sections/FeatureCards';
import Testimonials from '../components/sections/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <MarqueeBanner />
      <PopularDrinks />
      <FullMenu />
      <FeatureCards />
      <Testimonials />
    </>
  );
};

export default Home;
