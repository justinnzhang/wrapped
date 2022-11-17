import { Box, chakra } from '@chakra-ui/react';
import { AnimateParent, ChildText } from '../animation';

export const TutorialPopup = () => {
  return (
    <AnimateParent>
      <Box
        position='absolute'
        bottom={8}
        left={0}
        p={4}
        zIndex={9999}
        maxW='12rem'
      >
        <ChildText color='white'>
          <chakra.span fontWeight='bold'>👈 Back</chakra.span>
        </ChildText>
      </Box>
      <Box
        position='absolute'
        bottom={8}
        right={0}
        p={4}
        zIndex={9999}
        maxW='12rem'
      >
        <ChildText color='white'>
          <chakra.span fontWeight='bold'>Forward 👉</chakra.span>
        </ChildText>
      </Box>
    </AnimateParent>
  );
};
