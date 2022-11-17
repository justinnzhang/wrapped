import { Heading, Center, Stack, Text, chakra } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import { AnimateParent, AnimateChild } from '../../animation';

const NO_OF_LINES = 2;

export const Slide2 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #8D86DD, #FF80CE)',
    id: 'slide2',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <AnimateParent delay={0.1}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='left' w='100%' spacing={8}>
            <Stack>
              <AnimateChild>
                <Heading size='3xl'>The Basics</Heading>
              </AnimateChild>
              <AnimateChild>
                <Text color='gray.700'>The skimable resume points</Text>
              </AnimateChild>
            </Stack>
            <Stack>
              <AnimateChild>
                <Text fontSize='lg'>
                  I'm a{' '}
                  <chakra.span fontWeight='bold'>
                    Computer Science (BS)
                  </chakra.span>{' '}
                  and <chakra.span fontWeight='bold'>Business (BA)</chakra.span>{' '}
                  student graduating in{' '}
                  <chakra.span fontWeight='bold'>April 2023</chakra.span>
                </Text>
              </AnimateChild>
              <AnimateChild>
                <Text fontSize='lg'>
                  I've completed 4 internships at companies such as{' '}
                  <chakra.span fontWeight='bold' color='facebook.500'>
                    Meta
                  </chakra.span>
                  ,{' '}
                  <chakra.span fontWeight='bold' color='green.700'>
                    Shopify
                  </chakra.span>
                  , &{' '}
                  <chakra.span fontWeight='bold' color='blue.700'>
                    RBC
                  </chakra.span>
                </Text>
              </AnimateChild>
              <AnimateChild>
                <Text fontSize='lg'>
                  On the side, I co-founded and launched a profitable software
                  startup,{' '}
                  <chakra.span fontWeight='bold' color='purple.800'>
                    CaseCom
                  </chakra.span>
                  , to help organizations host case competitions
                </Text>
              </AnimateChild>
            </Stack>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
