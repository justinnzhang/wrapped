import { Box, Text, Flex } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/progress';

interface Props {
  numOfSlides: number; // Total number to render
  currSlide: number; // Current slide to be highlighted
  progress: number; // Amount of progress made within this slide
  isPaused: boolean; // Is it paused?
}

export const ProgressBar = ({
  numOfSlides,
  currSlide,
  progress,
  isPaused,
}: Props) => {
  return (
    <Box w='100%' shadow='lg' bg='transparent'>
      <Flex justifyContent='space-evenly' gap='0.25rem'>
        {[...Array(numOfSlides)].map((element, index) => (
          <Flex key={index} flexGrow={index === currSlide ? 2 : 1}>
            <Progress
              value={index === currSlide ? progress : 100}
              colorScheme='whiteAlpha'
              w='100%'
            />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
