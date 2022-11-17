import { Center, Stack, chakra } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import {
  AnimateParent,
  AnimateChild,
  ChildHeading,
  ChildText,
} from '../../animation';
import { constants } from '../../constants';
import { LottieBackground } from '../LottieBackground';

import greenWave from '../../assets/lottie/green-wave.json';

export const Slide9 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #174328, #0C5E78)',
    id: 'slide9',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <LottieBackground animationData={greenWave} />
      <AnimateParent delay={0.1}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='left' w='100%' spacing={4}>
            <ChildHeading
              size='2xl'
              textAlign='left'
              color={constants.BUSINESS_COLOR}
            >
              Business
            </ChildHeading>
            <ChildText fontSize='lg' fontWeight='bold' color='white'>
              Bringing it all together to build delightful products that solve
              real needs
            </ChildText>
            <ChildText color='gray.100'>
              Combining business school with entrepreneurial experience - I’ll
              bring my user empathy, strategic learnings, and understanding of
              how businesses thrive
            </ChildText>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
