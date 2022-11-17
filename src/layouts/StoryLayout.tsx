/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback, useRef } from 'react';
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
  Stack,
  chakra,
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
import { AiFillThunderbolt, AiFillGithub } from 'react-icons/ai';
import {
  AnimateChild,
  AnimateParentWhenVisible,
  ChildText,
} from '../animation';

const DEBUGGING_MODE = false;
const DEFAULT_COMPANY: CompanyCustom = {
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

  const company = getCompany();

  const scrollRef = useRef(null);

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
    const company = COMPANIES_LIST.find(
      (c) => c.name.toLowerCase() === companyName.toLowerCase()
    );

    if (company) return company;

    if (!company && companyName.length) {
      const defaultCompany: CompanyCustom = {
        name: companyName,
        color: 'purple.700',
      };

      return defaultCompany;
    }

    return DEFAULT_COMPANY;
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
      </Box>
    </Box>
  );

  const instructionsPopupMarkup = isLargeScreen && <InstructionsPopup />;

  const tldrMarkup = (
    <Box mt={4} pl={4} pr={4} pb={8} ref={scrollRef}>
      <AnimateParentWhenVisible scrollRef={scrollRef}>
        <Stack>
          <Stack direction='row' alignItems='center'>
            <Heading color='white'>
              <AiFillThunderbolt />
            </Heading>
            <Heading color='white'>TLDR</Heading>
          </Stack>
          <ChildText color='gray.300'>
            I'm a CS + Business student graduating April 2023, seeking{' '}
            <chakra.span fontWeight='bold'>
              New Grad Product Management
            </chakra.span>{' '}
            roles. Previously, I've worked in Product & SWE at companies such as
            Meta (Facebook), Shopify, and RBC.
          </ChildText>
          <ChildText color='gray.300'>
            Coming from a background in Film Studies, I combine Design,
            Engineering, and Business to build delightful products that solve
            challenging problems - let's start the conversation!
          </ChildText>
          <Stack pt={4}>
            <AnimateChild>
              <Button
                width='full'
                size='md'
                as='a'
                href={company?.resume || constants.PUBLIC_RESUME_LINK}
                target='_blank'
                rel='noreferrer'
                leftIcon={<RiFilePaperLine />}
              >
                {company?.resume ? 'Themed ' : ''}Resume
              </Button>
            </AnimateChild>
            <AnimateChild>
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
            </AnimateChild>
            <AnimateChild>
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
            </AnimateChild>
            <AnimateChild>
              <Button
                width='full'
                as='a'
                href={`mailto:${constants.EMAIL}`}
                target='_blank'
                rel='noreferrer'
                leftIcon={<AiFillGithub />}
                variant='ghost'
                colorScheme='whiteAlpha'
              >
                Code for this site
              </Button>
            </AnimateChild>
          </Stack>
        </Stack>
      </AnimateParentWhenVisible>
    </Box>
  );

  return (
    <Box bgGradient='linear(to-b, gray.900, #08024B)' h='100%' w='100%'>
      <Container maxW='28rem' p={0}>
        <Container maxW='28rem' h='100vh' p={0}>
          <Center h='100%' w='100%' flexDirection='column'>
            {storyMarkup}
          </Center>
        </Container>
        {tldrMarkup}
      </Container>
      {instructionsPopupMarkup}
    </Box>
  );
};
