import React from 'react';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants'

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
       <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
        <div>
          <h2 className='h2 leading-tight text-accent'>Meus ultimos <br/>trabalhos</h2>
          <p className='max-w-sm mb-16'> Meus trabalhos atuais foram feitos focando no meu desenvolvimento e aprendizando , onde pude desenvolver diversas tecnicas novas e aprender a agilizar o processo. </p>
          <button className='btn btn-sm'>veja todos os projetos</button>
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1 ' style={{borderRadius: 5 + '5px'}}>
         
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          
          <img className='group-hover:scale-125 transition-all duration-500 ' src={Img1} alt='' />
          
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Front-End</span></div>

          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>Gerenciamento Financeiro</span>
          </div>
          <div></div>
        </div>
        </motion.div>
       </div>
       <div>
        {/* essa é uma futura div para mais projetos*/ }
       </div>
    </div>
    </section>;
};

export default Work;
