'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiGithub, FiMail } from 'react-icons/fi';

import Card from '@/components/card/card';

function ContactPage() {
  return (
    <div className='container mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center pb-6'>
      <div className='grid grid-cols-1 gap-8  lg:grid-cols-3'>
        <motion.a
          href='https://github.com/exceldeo'
          target='_blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Card className='flex flex-col items-center justify-center space-y-5'>
            <FiGithub className='text-4xl text-white' />
            <div className='flex flex-col items-center justify-center space-y-1'>
              <div className='text-2xl font-bold text-white'>exceldeo</div>
              <p className=' text-zinc-400 hover:text-zinc-100'>Github</p>
            </div>
          </Card>
        </motion.a>
        <motion.a
          href='https://wa.me/6282257148963?text=Halo%20Excel%20Deo%20Satrio%20!%20Saya%20ingin%20bertanya%20tentang%20...'
          target='_blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Card className='flex flex-col items-center justify-center space-y-5'>
            <AiOutlineWhatsApp className='text-4xl text-white' />
            <div className='flex flex-col items-center justify-center space-y-1'>
              <div className='text-2xl font-bold text-white'>
                +62 822 5714 8963
              </div>
              <p className=' text-zinc-400 hover:text-zinc-100'>Whatsapp</p>
            </div>
          </Card>
        </motion.a>
        <motion.a
          href='mailto:excel.deo99@gmail.com'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Card className='flex flex-col items-center justify-center space-y-5'>
            <FiMail className='text-4xl text-white' />
            <div className='flex flex-col items-center justify-center space-y-1'>
              <div className='text-2xl font-bold text-white'>
                excel.deo99@gmail.com
              </div>
              <p className=' text-zinc-400 hover:text-zinc-100'>Email</p>
            </div>
          </Card>
        </motion.a>
      </div>
    </div>
  );
}

export default ContactPage;
