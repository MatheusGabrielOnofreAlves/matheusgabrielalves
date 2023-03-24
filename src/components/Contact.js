import React from 'react';

import {motion} from 'framer-motion'

import { fadeIn } from '../variants';

const Contact = () => {
  return <section className='section py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>

        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking wide'>Entrar em contato</h4>
            <h2 className=' text-[45px] lg:text-[90px] leading-none mb-14 '>Vamos trabalhar <br/> juntos!</h2>
          </div>
        </motion.div>
        
        <motion.form  variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} target='_blank' action='https://formsubmit.co/matheusgabrielalves04@gmail.com' method='POST' className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 ml-6' style={{borderRadius: 5 + '5px'}} >
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text'  placeholder='Seu Nome' required>

        </input>
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' name='email' type='email' placeholder='Seu email' required>

        </input>
        <textarea name='message' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 message' placeholder='Sua menssagem' required>
 
        </textarea>

        <input type="hidden" name="_next" value="http://localhost:3000/agradecimento.html"></input>

        <button className='btn btn-lg' type='submit'>Enviar menssagem</button>

        
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
