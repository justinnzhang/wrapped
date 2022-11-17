/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';
import {
  Outlet,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Center,
  useBreakpointValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useLongPress } from 'use-long-press';

import {
  ProgressBar,
  TutorialPopup,
  InstructionsPopup,
  ShareStoryButton,
} from '../components';
import { constants } from '../constants';
import { useKeyPress } from '../hooks';
import { COMPANIES_LIST } from '../constants/companies';

import {
  RiFilePaperLine,
  RiLinkedinBoxFill,
  RiMailOpenLine,
} from 'react-icons/ri';

const DEBUGGING_MODE = true;
const DEFAULT_COMPANY = {
  name: 'Your Company',
  color: 'purple.700',
};

interface Props {
  numOfSlides: number;
}

export const StoryLayout = ({ numOfSlides }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false || DEBUGGING_MODE);

  let rightPressed: boolean = useKeyPress('ArrowRight');
  let leftPressed: boolean = useKeyPress('ArrowLeft');

  const [searchParams] = useSearchParams();
  const companyName: string = searchParams.get('hi') || '';

  const company = getCompany() || DEFAULT_COMPANY;

  const isLargeScreen = useBreakpointValue(
    { base: false, md: true },
    { ssr: false }
  );

  useEffect(() => {
    if (isPaused) return;

    if (progress >= 100) {
      setProgress(0);
      getNextSlide();
    }

    const intervalId = setInterval(() => {
      setProgress(progress + constants.TRANSITION_TIME);
    }, 100);

    return () => clearInterval(intervalId);
  }, [progress]);

  // Check for right arrow key press
  useEffect(() => {
    if (rightPressed) {
      getNextSlide();
    }

    return;
  }, [rightPressed]);

  // Check for left arrow press
  useEffect(() => {
    if (leftPressed) {
      getPreviousSlide();
    }

    return;
  }, [leftPressed]);

  const currentSlide: number = parseInt(
    location.pathname.split('/').pop() || '0'
  );

  function getCompany() {
    return COMPANIES_LIST.find(
      (c) => c.name.toLowerCase() === companyName.toLowerCase()
    );
  }

  function generateSlideUrl(slide: number, company: string) {
    return `/${slide}${company.length > 0 ? `?hi=${company}` : ''}`;
  }

  function getNextSlide() {
    const newSlide =
      currentSlide < numOfSlides - 1 ? currentSlide + 1 : currentSlide;
    setProgress(0);
    navigate(generateSlideUrl(newSlide, companyName));
  }

  function getPreviousSlide() {
    const newSlide = currentSlide > 1 ? currentSlide - 1 : 0;
    setProgress(0);
    navigate(generateSlideUrl(newSlide, companyName));
  }

  const progress_bar_props = {
    currSlide: currentSlide,
    progress,
    numOfSlides,
  };

  const callback = useCallback((event: any) => {
    setIsPaused(true);
  }, []);

  const bind = useLongPress(true ? callback : null, {
    onStart: (event) => setIsPaused(true),
    onFinish: (event) => {
      setIsPaused(false || DEBUGGING_MODE);
      setProgress(progress + 0.01);
    },
    onCancel: (event) => {
      setIsPaused(false || DEBUGGING_MODE);
      setProgress(progress + 0.01);
    },
    cancelOnMovement: true,
  });

  const navigationZoneMarkup = (
    <>
      <Box
        position='absolute'
        left={0}
        top={0}
        w='20vw'
        h='100%'
        onClick={getPreviousSlide}
        id='previous-slide-touch-target'
        aria-label='Previous Slide'
        zIndex={9999}
      />
      <Box
        position='absolute'
        right={0}
        top={0}
        w='20vw'
        h='100%'
        onClick={getNextSlide}
        id='next-slide-touch-target'
        aria-label='Next Slide'
        zIndex={9999}
      />
    </>
  );

  const tutorialPopupMarkup = currentSlide === 0 && <TutorialPopup />;

  const storyMarkup = (
    <Box maxH='900px' h='100%' w='100%'>
      <Box
        borderRadius={16}
        position='relative'
        overflow='hidden'
        id='story-wrapper'
        className='unselectable'
        h='calc(100% - 8rem)'
        w='100%'
        {...bind()}
      >
        <ProgressBar {...progress_bar_props} />
        {tutorialPopupMarkup}
        {navigationZoneMarkup}
        <Outlet context={company} />
      </Box>
      <Box h={4}>
        <ShareStoryButton slide={currentSlide} companyName={company.name} />
        <Stack p={4} bg='gray.900'>
          <Heading color='white'>TLDR</Heading>
          <Text color='gray.300'>
            I'm a CS + Business student graduating April 2023, actively seeking
            New Grad Product Management roles. Previously, I've worked in
            Product & SWE at companies such as Meta (Facebook), Shopify, and
            RBC.
          </Text>
          <Text color='gray.300'>
            Coming from a background in Film Studies, I combine Design,
            Engineering, and Business to build delightful products that solve
            challenging problems.
          </Text>
          <Stack pt={4}>
            <Button
              width='full'
              size='md'
              as='a'
              href={constants.PUBLIC_RESUME_LINK}
              target='_blank'
              rel='noreferrer'
              leftIcon={<RiFilePaperLine />}
            >
              Resume
            </Button>
            <Button
              width='full'
              as='a'
              href={constants.LINKEDIN_LINK}
              target='_blank'
              rel='noreferrer'
              colorScheme='linkedin'
              leftIcon={<RiLinkedinBoxFill />}
            >
              LinkedIn
            </Button>
            <Button
              width='full'
              as='a'
              href={`mailto:${constants.EMAIL}`}
              target='_blank'
              rel='noreferrer'
              leftIcon={<RiMailOpenLine />}
            >
              Email
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );

  const instructionsPopupMarkup = isLargeScreen && <InstructionsPopup />;

  return (
    <Box h='100%' w='100%' bg='gray.900'>
      <Container maxW='28rem' h='100vh' p={0} bg='gray.900'>
        <Center h='100%' w='100%'>
          {storyMarkup}
        </Center>
      </Container>
      {instructionsPopupMarkup}
    </Box>
  );
};
