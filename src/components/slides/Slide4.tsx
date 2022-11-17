import { Heading, Center, Stack } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import { AnimateParent, AnimateChild, AnimatedTextRow } from '../../animation';
import { constants } from '../../constants';

const NUM_OF_LINES = 2;

export const Slide4 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #FFEACA, #ACEBFF)',
    id: 'slide4',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <AnimateParent delay={0.05}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='center' w='100%' spacing={1}>
            <AnimateChild>
              <Heading size='md' textAlign='center'>
                I'm someone who works across
              </Heading>
            </AnimateChild>
            <AnimatedTextRow
              word='Design'
              lines={NUM_OF_LINES}
              highlightedWordColor={constants.DESIGN_COLOR}
            />
            <AnimatedTextRow
              word='Engineering'
              lines={NUM_OF_LINES}
              highlightedWordColor={constants.ENGINEERING_COLOR}
            />
            <AnimatedTextRow
              word='Business'
              lines={NUM_OF_LINES}
              highlightedWordColor={constants.BUSINESS_COLOR_LIGHT}
            />
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
