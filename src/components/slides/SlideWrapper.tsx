import { Box } from '@chakra-ui/react';
import './TopShadow.css';

interface Props {
  children: React.ReactNode;
  rest?: any;
}

export const SlideWrapper = ({ children, rest }: Props) => {
  return (
    <Box {...rest} h='100%' w='100%'>
      <Box height={7} className='top-shadow' />
      {children}
    </Box>
  );
};
