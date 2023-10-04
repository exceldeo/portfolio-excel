import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';

import './App.css';

const Carousel = ({
  images,
  onSelectedImage,
}: {
  images: string[];
  onSelectedImage: (image: string) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: 'spring', stiffness: 1000, damping: '10' },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection('left');

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const handleImageClick = (image: string) => {
    onSelectedImage(image);
  };

  return (
    <div className='carousel'>
      <div className='carousel-images'>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
          animate='visible'
          exit='exit'
          onClick={() => handleImageClick(images[currentIndex])}
          variants={slideVariants}
        />
        <div className='slide_direction'>
          <motion.div
            variants={slidersVariants}
            className='left'
            onClick={handlePrevious}
          >
            <ArrowLeftIcon color='#fff' />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            className='right'
            onClick={handleNext}
          >
            <ArrowRightIcon color='#fff' />
          </motion.div>
        </div>
      </div>
      <div className='carousel-indicator'>
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            initial='initial'
            animate={currentIndex === index ? 'animate' : ''}
            whileHover='hover'
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
