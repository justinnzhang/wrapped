import { Heading, Center, Stack, Text, Square, Image } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import {
  AnimateParent,
  AnimateChild,
  ChildHeading,
  ChildText,
} from '../../animation';
import { itemFadeToLeft, itemFadeToRight } from '../../animation/variants';

import { constants } from '../../constants';

import githubLogo from '../../assets/logos/github-logo.png';
import reactIcon from '../../assets/logos/react-icon.png';
import typescriptLogo from '../../assets/logos/typescript-logo.png';
import vscodeLogo from '../../assets/logos/vs-code-logo.png';
import awsLogo from '../../assets/logos/aws-logo.png';
import stackoverflowLogo from '../../assets/logos/stackoverflow-logo.png';
import lottieLogo from '../../assets/logos/lottie-logo.png';
import jsLogo from '../../assets/logos/js-logo.png';
import netlifyLogo from '../../assets/logos/netlify-logo.png';
import chakraLogo from '../../assets/logos/chakra-logo.png';

const TOP_ROW_LOGOS = [
  {
    src: githubLogo,
    alt: 'github logo',
  },
  {
    src: reactIcon,
    alt: 'react logo',
  },
  {
    src: typescriptLogo,
    alt: 'typescript logo',
  },
  {
    src: chakraLogo,
    alt: 'Chakra UI Logo',
  },
  {
    src: jsLogo,
    alt: 'JavaScript logo',
  },
];

const BOTTOM_ROW_LOGOS = [
  {
    src: awsLogo,
    alt: 'Amazon Web Services Logo',
  },
  {
    src: lottieLogo,
    alt: 'Lottie Logo',
  },
  {
    src: stackoverflowLogo,
    alt: 'Stackoverflow logo',
  },
  {
    src: vscodeLogo,
    alt: 'vscode logo',
  },
  {
    src: netlifyLogo,
    alt: 'Netlify Logo',
  },
];

export const Slide8 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #6F8DFF, #ACEBFF)',
    id: 'slide8',
  };

  return (
    <SlideWrapper rest={wrapperProps}>
      <Center h='100%' w='100%' p={8}>
        <Stack alignItems='center' w='100%' spacing={8}>
          <Stack>
            <AnimateParent delay={0.05}>
              <Stack direction='row' alignItems='left' pl={4}>
                {TOP_ROW_LOGOS.map((logo, index) => (
                  <AnimateChild
                    key={`design-logos-${index}-top`}
                    variants={itemFadeToRight}
                  >
                    <Square
                      size={24}
                      p={4}
                      bg='black'
                      bgGradient='linear(to-b, #4F69C1, #0A4C62)'
                      borderRadius='md'
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        h='75%'
                        borderRadius='md'
                      />
                    </Square>
                  </AnimateChild>
                ))}
              </Stack>
            </AnimateParent>
            <AnimateParent delay={0.05}>
              <Stack direction='row' alignItems='right'>
                {BOTTOM_ROW_LOGOS.map((logo, index) => (
                  <AnimateChild
                    key={`design-logos-${index}-bottom`}
                    variants={itemFadeToLeft}
                  >
                    <Square
                      size={24}
                      p={4}
                      bg='black'
                      bgGradient='linear(to-b, #4F69C1, #0A4C62)'
                      borderRadius='md'
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        h='75%'
                        borderRadius='md'
                      />
                    </Square>
                  </AnimateChild>
                ))}
              </Stack>
            </AnimateParent>
          </Stack>
          <AnimateParent delay={0.333}>
            <Stack alignItems='center'>
              <ChildHeading
                size='md'
                textAlign='center'
                color={constants.ENGINEERING_COLOR}
              >
                Number of hours spent on Stackoverflow?
              </ChildHeading>
              <ChildText color='gray.700' fontWeight='semibold'>
                Too many (especially to build this site)
              </ChildText>
            </Stack>
          </AnimateParent>
        </Stack>
      </Center>
    </SlideWrapper>
  );
};
