import React from 'react';

import Hero from './Hero';
import Projetos from './Projetos'
import CTA from './CTA'

const Galeria: React.FC = () => {
  return (
    <section className='bg-gray-950'>
    <Hero />
    <Projetos />
    <CTA />
    </section>
  );
}

export default Galeria;