import React from 'react';

import Image from '../assets/avatarmatheus.svg';
import Image2 from '../assets/avatar1.jpeg'

import {FaGithub, } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn} from '../variants'

const Banner = () => {
  return (
  <section className='smin-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container m-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          MATHEUS <span>GABRIEL</span>
        </motion.h1>
        <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading'>
          <span className='mr-4'>Eu sou um</span>
          <TypeAnimation sequence={[
            'Desenvolvedor', 2000
          ]}
          speed={50}
          className="text-accent lg:text-[50px]"
          wrapper='span'
          repeat={Infinity}
          />
        </motion.div>
        <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
        Desde minha infância sou apaixonado por tecnologia e por tudo que ela envolve. Com isso,
aos 15 anos procurei me especializar no ramo de T.I dando inicio ao Ensino Médio Técnico
e hoje, aos 19 anos, sou formado Técnico em Desenvolvimento de Sistemas na Escola
Técnica Estadual de São Paulo da cidade de Itu.
        </motion.p>
      <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
        <a href='mailto:matheusgabrielalves04@gmail.com'><button className='btn btn-lg'>Fale comigo</button></a>
        <a href='https://github.com/MatheusGabrielOnofreAlves' target={'_blank'} className='text-gradient btn-link' >Meu portfolio</a>
      </motion.div>
      <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
        <a href='https://github.com/MatheusGabrielOnofreAlves' target={'_blank'}>
          <FaGithub/>
        </a>
      </motion.div>
        </div>
      <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'}  className='hidden lg:flex flex-1 max-w-[320] lg:max-w-[482px]'>
        <img src={Image2} alt="" />
      </motion.div>
    </div>
    </div>
    </section>
  );
};

export default Banner;
