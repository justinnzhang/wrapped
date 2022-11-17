import { Box, Text, Button } from '@chakra-ui/react';
import { Link, useSearchParams } from 'react-router-dom';

export const PlaylistPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const nav_to = `s/0${
    searchParams.get('hi') ? `?hi=${searchParams.get('hi')}` : ''
  }`;

  return (
    <Box>
      <Text>Playlist Page</Text>
      <Button as={Link} to={nav_to}>
        Start
      </Button>
    </Box>
  );
};
