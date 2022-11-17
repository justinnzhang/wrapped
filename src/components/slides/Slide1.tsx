import { useOutletContext } from 'react-router-dom';
import {
  Text,
  Stack,
  Heading,
  Center,
  chakra,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import { AnimateParent, AnimateChild } from '../../animation';

import content from './content.json';

export const Slide1 = () => {
  const company: CompanyCustom = useOutletContext();

  const wrapperProps = {
    bgGradient: 'linear(to-b, #8D86DD, #FF80CE)',
    id: 'slide1',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <AnimateParent>
        <Center h='100%'>
          <Flex direction='column' h='60%'>
            <Flex>
              <Stack p={8} spacing={4}>
                <AnimateChild>
                  <Heading size='2xl' lineHeight={1.2}>
                    {content['slide1'].title}{' '}
                    <chakra.span
                      color={company.color}
                      bg={
                        company.name === 'Your Company'
                          ? 'transparent'
                          : 'gray.50'
                      }
                    >
                      {company.name}
                    </chakra.span>
                  </Heading>
                </AnimateChild>
                <AnimateChild>
                  <Text fontSize='xl'>{content['slide1'].text}</Text>
                </AnimateChild>
              </Stack>
            </Flex>
            <Spacer />
            <Flex p={8}>
              <AnimateChild>
                <Text fontWeight='bold' fontSize='md'>
                  Why? Continue to find out!
                </Text>
              </AnimateChild>
            </Flex>
          </Flex>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
