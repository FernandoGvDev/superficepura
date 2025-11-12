import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Hero from './Hero';
import Projetos from './Projetos'
import CTA from './CTA'

const Galeria: React.FC = () => {
  return (
    <section className='bg-gray-950'>
      <Header />
    <Hero />
    <Projetos />
    <CTA />
    <Footer />
    </section>
  );
}

export default Galeria;