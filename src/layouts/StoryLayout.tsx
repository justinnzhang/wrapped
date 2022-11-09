import { Outlet } from 'react-router-dom';
import { Box, Progress } from '@chakra-ui/react';

import { ProgressBar } from '../components';

const MOCK_DATA_FOR_PROGRESS_BAR = {
  numOfSlides: 10,
  currSlide: 5,
  progress: 10,
  isPaused: false,
};

interface Props {
  children?: React.ReactNode;
}

export const StoryLayout = ({ children }: Props) => {
  return (
    <Box w='100%' borderRadius='lg' position='relative' p={2}>
      <ProgressBar {...MOCK_DATA_FOR_PROGRESS_BAR} />
      <p>Layout</p>
      <Outlet />
    </Box>
  );
};
