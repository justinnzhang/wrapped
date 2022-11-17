import { motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Stack, Heading, Center } from '@chakra-ui/layout';

import { EASE_PROPS } from './variants';

const STAGGER_INTERVAL = 0.05;

interface Props {
  word: string;
  lines: number;
  highlightedWordColor?: string;
}

export const AnimatedTextRow = ({
  word,
  lines,
  highlightedWordColor = 'black',
}: Props) => {
  return (
    <Center>
      <Stack direction='row' spacing={4}>
        {[...Array(lines)].map((el, index) => (
          <Heading
            size='2xl'
            key={`${index}-forward`}
            className='outline-text no-wrap'
            color='rgba(255, 255, 255, 0.5)'
            as={motion.h4}
            variants={{
              initial: {
                opacity: 0,
                x: 20,
              },
              animate: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.25,
                  ease: EASE_PROPS,
                },
              },
            }}
          >
            {word}
          </Heading>
        ))}
        <Heading
          size='2xl'
          color={highlightedWordColor}
          as={motion.h4}
          variants={{
            initial: {
              opacity: 0,
              y: 20,
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.25,
                ease: EASE_PROPS,
              },
            },
          }}
          className='no-wrap'
        >
          {word}
        </Heading>
        {[...Array(lines)].map((el, index) => (
          <Heading
            size='2xl'
            as={motion.h4}
            key={`${index}-backward`}
            color='rgba(255, 255, 255, 0.5)'
            className='outline-text no-wrap'
            variants={{
              initial: {
                opacity: 0,
                x: -20,
              },
              animate: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.25,
                  ease: EASE_PROPS,
                },
              },
            }}
          >
            {word}
          </Heading>
        ))}
      </Stack>
    </Center>
  );
};
