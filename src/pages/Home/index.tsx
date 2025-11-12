import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from './Hero';
import FeatureCards from './FeatureCards';
import DiagonalSection from './DiagonalSection';
import ImageCarousel from './ImageCarousel';
import AboutSection from './AboutSection';
import TrustCards from './TrustCards';

const Home: React.FC = () => {
  return (
    <section className='bg-gray-950'>
      <Header />
    <Hero />
    <FeatureCards />
    <DiagonalSection />
    <ImageCarousel />
    <AboutSection />
    <TrustCards />
    <Footer />
    </section>
  );
}

export default Home;