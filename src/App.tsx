import * as React from 'react';
import {
  ChakraProvider,
  Container,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { StoryLayout, ContentLayout } from './layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StoryLayout />,
    children: [{ path: 'story/:id', element: <ContentLayout /> }],
  },
]);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <StoryLayout>
        <RouterProvider router={router} />
      </StoryLayout>
    </ChakraProvider>
  );
};
