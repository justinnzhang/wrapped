import { Heading, Center, Stack, Text, chakra } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import { AnimateParent, ChildHeading, ChildText } from '../../animation';
import { LottieBackground } from '../LottieBackground';

import { constants } from '../../constants';
import blueWave from '../../assets/lottie/blue-wave.json';

export const Slide7 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #6F8DFF, #ACEBFF)',
    id: 'slide7',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <LottieBackground animationData={blueWave} />
      <AnimateParent delay={0.1}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='left' w='100%' spacing={4}>
            <ChildHeading
              size='2xl'
              textAlign='left'
              color={constants.ENGINEERING_COLOR}
            >
              Engineering
            </ChildHeading>
            <ChildText fontSize='lg' fontWeight='bold'>
              Balancing technical feasibility with long-term bets
            </ChildText>
            <ChildText color='gray.700'>
              As a hacker at heart, I’m not afraid to get my hands dirty and
              work closely with engineering teams to get{' '}
              <chakra.span fontWeight='bold'>ship</chakra.span> done - like
              building this website!
            </ChildText>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
