import { Heading, Center, Stack, Text, Box } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import { AnimateParent, AnimateChild } from '../../animation';
import { LottieBackground } from '../LottieBackground';

import orangeTealWave from '../../assets/lottie/orange-teal-wave.json';

export const Slide3 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #FFEACA, #ACEBFF)',
    id: 'slide3',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <LottieBackground animationData={orangeTealWave} />
      <AnimateParent delay={0.5}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='left' w='100%'>
            <AnimateChild>
              <Heading size='2xl'>Going beyond the resume...</Heading>
            </AnimateChild>
            <AnimateChild>
              <Text color='gray.700'>There's more to the story</Text>
            </AnimateChild>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
