import { Heading, Center, Stack, Text, Square, chakra } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import {
  AnimateParent,
  AnimateChild,
  ChildText,
  ChildHeading,
} from '../../animation';
import { constants } from '../../constants';

export const Slide10 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #174328, #0C5E78)',
    id: 'slide10',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <AnimateParent delay={0.1}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='center' w='100%' spacing={8}>
            <ChildText color='white'>
              <chakra.span fontWeight='bold' color={constants.BUSINESS_COLOR}>
                Beyond the classroom:
              </chakra.span>{' '}
              I'm an active mentor to students interested in tech - organizing
              hackathons, teaching product skills, and giving back to the
              community
            </ChildText>
            <ChildText color='white'>
              Currently, I'm leading the campus-side of a free Product Bootcamp
              hosted by alumni at companies such as Adobe, Microsoft, Patreon,
              and more -{' '}
              <chakra.span fontWeight='bold' color={constants.BUSINESS_COLOR}>
                one that I learned much from!
              </chakra.span>
            </ChildText>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
