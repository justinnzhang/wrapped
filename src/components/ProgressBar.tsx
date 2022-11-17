import { Box, Text, Flex } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/progress';

interface Props {
  numOfSlides: number; // Total number to render
  currSlide: number; // Current slide to be highlighted
  progress: number; // Amount of progress made within this slide
}

export const ProgressBar = ({ numOfSlides, currSlide, progress }: Props) => {
  function getProgress(index: number) {
    if (currSlide > index) return 100;
    else if (currSlide === index) return progress;
    else return 0;
  }

  return (
    <Box
      w='100%'
      shadow='lg'
      bg='transparent'
      pl={4}
      pr={4}
      pt={0.5}
      position='absolute'
      left={0}
      top={2}
      zIndex={999}
      id='story-progress-bar'
    >
      <Flex justifyContent='space-evenly' gap='0.25rem'>
        {[...Array(numOfSlides)].map((element, index) => (
          <Flex key={index} flexGrow={1}>
            <Progress
              value={getProgress(index)}
              background='grey'
              w='100%'
              borderRadius='full'
              size='xs'
              transition='width 0.3s ease'
            />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
