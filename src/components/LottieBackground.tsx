import { Box } from '@chakra-ui/react';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';

interface Props {
  animationData: any;
}

export const LottieBackground = ({ animationData }: Props) => {
  return (
    <Box
      position='absolute'
      h='100%'
      w='100%'
      top={0}
      left={0}
      zIndex={0}
      id='lottie-animation-wrapper'
    >
      <Lottie
        loop
        animationData={animationData}
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ height: '100%' }}
      />
    </Box>
  );
};
