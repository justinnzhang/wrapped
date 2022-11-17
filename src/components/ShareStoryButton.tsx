import { Button, useClipboard, useToast } from '@chakra-ui/react';
import { FiShare } from 'react-icons/fi';

interface Props {
  slide: number;
  companyName: string;
}

export const ShareStoryButton = ({ companyName }: Props) => {
  const toast = useToast();

  const { onCopy } = useClipboard(
    `https://wrapped.justinzha.ng/${
      companyName !== 'Your Company' ? `?hi=${companyName}` : ''
    }`
  );

  return (
    <Button
      variant='ghost'
      width='full'
      colorScheme='whiteAlpha'
      leftIcon={<FiShare />}
      onClick={() => {
        onCopy();
        toast({
          title: 'Link copied to clipboard!',
          status: 'success',
          duration: 8000,
          isClosable: true,
          position: 'top',
        });
      }}
      size='lg'
    >
      Share this story
    </Button>
  );
};
