import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MarqueeBanner from './components/sections/MarqueeBanner';
import About from './components/sections/About';
import PopularDrinks from './components/sections/PopularDrinks';
import FullMenu from './components/sections/FullMenu';
import Testimonials from './components/sections/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MarqueeBanner />
        <PopularDrinks />
        <FullMenu />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
