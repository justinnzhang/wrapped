import { Heading, Center, Stack, Text, chakra } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import { AnimateParent, AnimateChild } from '../../animation';
import { LottieBackground } from '../LottieBackground';

import purpleLine from '../../assets/lottie/purple-line-with-loop.json';
import { constants } from '../../constants';

export const Slide5 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #EEBFFF, #ACEBFF)',
    id: 'slide5',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <LottieBackground animationData={purpleLine} />
      <AnimateParent delay={0.15}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='left' w='100%' spacing={4}>
            <AnimateChild>
              <Heading
                size='2xl'
                textAlign='left'
                color={constants.DESIGN_COLOR}
              >
                Design
              </Heading>
            </AnimateChild>
            <AnimateChild>
              <Text fontSize='lg' fontWeight='bold'>
                I've got an eye for design, but know when to get out of the way
              </Text>
            </AnimateChild>
            <AnimateChild>
              <Text color='gray.700'>
                Starting University in Film Studies gave me the chance to learn
                from talented creatives and build a foundation in{' '}
                <chakra.span fontWeight='bold'>
                  designing brands and delighting the user
                </chakra.span>
              </Text>
            </AnimateChild>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
