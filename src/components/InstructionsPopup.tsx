import {
  Box,
  Text,
  CloseButton,
  Flex,
  Spacer,
  Stack,
  chakra,
  useDisclosure,
  SlideFade,
} from '@chakra-ui/react';

export const InstructionsPopup = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  if (!isOpen) return null;

  return (
    <SlideFade in={isOpen}>
      <Box
        bg='gray.100'
        p={4}
        m={4}
        borderRadius='md'
        h='fit-content'
        w={80}
        position='fixed'
        bottom={0}
        right={0}
      >
        <Flex pb={2} alignItems='center'>
          <Flex>
            <Text fontWeight='bold' fontSize='lg'>
              Instructions
            </Text>
          </Flex>
          <Spacer />
          <Flex>
            <CloseButton onClick={onToggle} />
          </Flex>
        </Flex>
        <Stack spacing={1}>
          <Text color='gray.600'>
            <chakra.span fontWeight='medium'>Tap/Click</chakra.span> on the
            edges of the story to move forward/back
          </Text>
          <Text color='gray.600'>
            <chakra.span fontWeight='medium'>Tap/Click & Hold</chakra.span> in
            the middle of the story to pause
          </Text>
          <Text color='gray.600'>
            <chakra.span fontWeight='medium'>Right Arrow</chakra.span> moves
            forward
          </Text>
          <Text color='gray.600'>
            <chakra.span fontWeight='medium'>Left Arrow</chakra.span> moves back
          </Text>
        </Stack>
      </Box>
    </SlideFade>
  );
};
