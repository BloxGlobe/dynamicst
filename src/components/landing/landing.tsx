import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Footer } from '../layout/Footer';
import { LandingLayout } from '../layout/LandingLayout';


interface LandingProps {
  onAuthClick: () => void;
}

const Landing: React.FC<LandingProps> = ({ onAuthClick }) => {
  return (
    <LandingLayout>
      <Navbar onAuthClick={onAuthClick} />
      <Hero />
      <Features />
      <Footer />
    </LandingLayout>
  );
};

export default Landing;