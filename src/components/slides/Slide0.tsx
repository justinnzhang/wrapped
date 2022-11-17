import { Text, Heading, Box, Center, Stack, Image } from '@chakra-ui/react';

import lottieJson from '../../assets/lottie/cover-animation.json';
import memoji from '../../assets/memoji-smiling.png';

import { AnimateParent, AnimateChild } from '../../animation';
import { LottieBackground } from '../LottieBackground';

import content from './content.json';

export const Slide0 = () => {
  const titleCardMarkup = (
    <Box
      zIndex={99}
      position='absolute'
      top={4}
      id='content-area'
      h='100%'
      w='100%'
    >
      <AnimateParent>
        <Center h='100%' w='100%' p={8}>
          <Box
            className='glass'
            w='100%'
            borderRadius={8}
            p={4}
            bg='rgba(0,0,0,0.5)'
          >
            <Stack spacing={8} alignItems='left'>
              <AnimateChild>
                <Image src={memoji} alt='memoji' maxW={32} />
              </AnimateChild>
              <Stack spacing={4}>
                <AnimateChild>
                  <Heading color='blue.50' size='2xl'>
                    {content['slide0'].title}
                  </Heading>
                </AnimateChild>
                <AnimateChild>
                  <Text color='gray.300' fontSize='lg'>
                    {content['slide0'].text}
                  </Text>
                </AnimateChild>
                <AnimateChild>
                  <Text color='gray.500' fontSize='sm'>
                    TLDR below
                  </Text>
                </AnimateChild>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </AnimateParent>
    </Box>
  );

  return (
    <Box bg='black' h='100%' w='100%' id='slide-1'>
      <Box height={7} className='top-shadow' zIndex={999} />
      <LottieBackground animationData={lottieJson} />
      {titleCardMarkup}
    </Box>
  );
};
