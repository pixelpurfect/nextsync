// /page.tsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

const Page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Page;

