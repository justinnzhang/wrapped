import { Box, Text, chakra } from '@chakra-ui/react';

export const TutorialPopup = () => {
  return (
    <>
      <Box
        position='absolute'
        bottom={16}
        right={0}
        p={4}
        zIndex={9999}
        maxW='12rem'
      >
        <Text color='white'>
          <chakra.span fontWeight='bold'>Forward 👉</chakra.span>
        </Text>
      </Box>
      <Box
        position='absolute'
        bottom={16}
        left={0}
        p={4}
        zIndex={9999}
        maxW='12rem'
      >
        <Text color='white'>
          <chakra.span fontWeight='bold'>👈 Back</chakra.span>
        </Text>
      </Box>
    </>
  );
};
