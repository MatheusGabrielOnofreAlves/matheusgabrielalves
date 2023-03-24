import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion'

import { fadeIn } from '../variants';

const About = () => {
  const[ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]  mix-blend-lighten bg-top'></motion.div>
      
      <div  className='flex-1 '>
        <h2 className='h2 text-accent'>Sobre mim</h2>
        <h3 className='h3 mb-4'>Sou um desenvolvedor junior e estudo programação a 4 anos </h3>
        <p className='mb-6'>Com uma grande curiosidade e sede por conhecimento, venho buscado evoluir e para
isso procurei fazer cursos e workshops online, principalmentne na Rocketseat e DIO, onde estudei ReactJS e .NET.
Atualmente estou no terceiro semestre no Ensino Superior em Análise e Desenvolvimento de Sistemas.

Em 2022 tive a oportunidade de estar trabalhando em uma startup onde pude aprimorar meus conhecimentos em JavaScript, Angular, ReactJS, HTML, CSS e .NET</p>

<div className='flex'>
  <div>
    <div className='text-[40px] font-tertiary text-gradient mb-2'>
      {inView ? <CountUp start={0} end={1} duration={3} /> : null}
    </div>
    <div className='font-primary text-sm tracking-[2px]'>Ano de <br/> Experiencia</div>
   <div className='flex gap-x-8 items-center'>
    <a href=''><button className='btn btn-lg'>fale comigo</button></a>
    <a href='https://github.com/MatheusGabrielOnofreAlves' className='text-gradient btn-link' target={'_blank'}>Meu portifolio</a>
   </div>
  </div>
</div>
      </div>
      </div>
    </div>
  </section>
  );
};

export default About;
