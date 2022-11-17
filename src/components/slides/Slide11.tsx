import { useOutletContext } from 'react-router';
import { Stack, Center, chakra, Button } from '@chakra-ui/react';

import { SlideWrapper } from './SlideWrapper';
import {
  AnimateChild,
  AnimateParent,
  ChildHeading,
  ChildText,
} from '../../animation';

import { constants } from '../../constants';

import {
  RiFilePaperLine,
  RiLinkedinBoxFill,
  RiMailOpenLine,
} from 'react-icons/ri';

export const Slide11 = () => {
  const wrapperProps = {
    bgGradient: 'linear(to-b, #221305, #052537)',
    id: 'slide11',
  };

  const company: CompanyCustom = useOutletContext();

  const companyPitchMarkup = company?.message ? (
    <ChildText color='white'>{company?.message}</ChildText>
  ) : (
    <ChildText color='white'>Let's start the conversation!</ChildText>
  );

  return (
    <SlideWrapper rest={wrapperProps}>
      <AnimateParent delay={0.1}>
        <Center h='100%' w='100%' p={8}>
          <Stack alignItems='left' w='100%' spacing={8}>
            <ChildHeading color='white'>
              Now that you've read this far...
            </ChildHeading>
            {companyPitchMarkup}
            <Stack zIndex={999999}>
              <AnimateChild>
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
            </Stack>
          </Stack>
        </Center>
      </AnimateParent>
    </SlideWrapper>
  );
};
