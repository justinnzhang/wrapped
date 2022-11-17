import { Heading, Center, Stack, Text, Square, Image } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import { AnimateParent, AnimateChild } from '../../animation';

import figmaLogo from '../../assets/logos/figma-logo.svg';
import aeLogo from '../../assets/logos/ae-logo.png';
import premiereLogo from '../../assets/logos/premiere-logo.png';
import { constants } from '../../constants';

const LOGOS = [
  {
    size: 32,
    src: aeLogo,
    alt: 'after effects logo',
  },
  {
    size: 48,
    src: figmaLogo,
    alt: 'figma logo',
  },
  {
    size: 32,
    src: premiereLogo,
    alt: 'premiere pro logo',
  },
];

export const Slide6 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #EEBFFF, #ACEBFF)',
    id: 'slide1',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <AnimateParent delay={0.1}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='center' w='100%' spacing={8}>
            <Stack direction='row' alignItems='center'>
              {LOGOS.map((logo, index) => (
                <AnimateChild key={`design-logos-${index}`}>
                  <Square
                    size={logo.size}
                    p={4}
                    bg='black'
                    bgGradient='linear(to-b, #3D00A1, #9664E9)'
                    borderRadius='md'
                  >
                    <Image src={logo.src} alt={logo.alt} h='75%' />
                  </Square>
                </AnimateChild>
              ))}
            </Stack>
            <Stack alignItems='center'>
              <AnimateChild>
                <Heading
                  size='md'
                  textAlign='center'
                  color={constants.DESIGN_COLOR}
                >
                  Hours spent in Figma, Adobe After Effects, and Premiere Pro?
                </Heading>
              </AnimateChild>
              <AnimateChild>
                <Text color='gray.700' fontWeight='semibold'>
                  Countless
                </Text>
              </AnimateChild>
            </Stack>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
