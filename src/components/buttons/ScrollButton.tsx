import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

import IconButton from '@/components/buttons/IconButton';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest < 400) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  // window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {visible && (
        <motion.div
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <IconButton
            className='fixed bottom-7 right-3 z-10 h-4 transform cursor-pointer rounded-full bg-white dark:bg-stone-950'
            variant='outline'
            icon={ArrowUp}
            onClick={scrollToTop}
          />
        </motion.div>
      )}
    </>
  );
};

export default ScrollButton;
