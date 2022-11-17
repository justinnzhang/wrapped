import {
  Box,
  Text,
  Heading,
  Button,
  Center,
  Container,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineRedo } from 'react-icons/ai';

export const NotFoundPage = () => {
  return (
    <Box h='100vh' w='100vw' bg='gray.900'>
      <Container maxW='28rem' h='100%'>
        <Center h='100%' w='100%'>
          <Stack w='100%' p={4}>
            <Heading color='white'>How did you get here?</Heading>
            <Text color='white' pb={8}>
              Back to the start
            </Text>
            <Button as={Link} to='/' w='full' leftIcon={<AiOutlineRedo />}>
              Back to the start
            </Button>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};
