import { motion } from 'framer-motion';
import { item } from './variants';

interface Props {
  children: React.ReactNode;
  variants?: any;
}

export const AnimateChild = ({ children, variants = item }: Props) => {
  return (
    <motion.div variants={variants} style={{ width: '100' }}>
      {children}
    </motion.div>
  );
};
