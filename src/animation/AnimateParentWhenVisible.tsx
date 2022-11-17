import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { EASE_PROPS } from './variants';

interface Props {
  children: React.ReactNode;
  rest?: any;
  delay?: number;
  scrollRef?: any;
}

export const AnimateParentWhenVisible = ({
  children,
  rest,
  delay = 0.15,
  scrollRef,
}: Props) => {
  const container = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: EASE_PROPS,
        staggerChildren: delay,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial='initial'
      whileInView='animate'
      animate='animate'
      exit='initial'
      viewport={{ once: false, root: scrollRef }}
      style={{ height: '100%', width: '100%' }} // Making sure this component impacts children the least
      {...rest}
    >
      {children}
    </motion.div>
  );
};
