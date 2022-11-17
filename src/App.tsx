import { ChakraProvider } from '@chakra-ui/react';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';

import { customTheme } from './theme';
import { StoryLayout } from './layouts';
import {
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
} from './components/slides';
import './global.css';

const SLIDE_ROUTES = [
  { path: '', element: <Slide0 /> },
  { path: '0', element: <Slide0 /> },
  { path: '1', element: <Slide1 /> },
  { path: '2', element: <Slide2 /> },
  { path: '3', element: <Slide3 /> },
  { path: '4', element: <Slide4 /> },
  { path: '5', element: <Slide5 /> },
  { path: '6', element: <Slide6 /> },
  { path: '7', element: <Slide7 /> },
  { path: '8', element: <Slide8 /> },
  { path: '9', element: <Slide9 /> },
  { path: '10', element: <Slide10 /> },
  { path: '11', element: <Slide11 /> },
];

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={<StoryLayout numOfSlides={SLIDE_ROUTES.length - 1} />}
        >
          {SLIDE_ROUTES.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
      </>
    )
  );

  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};
