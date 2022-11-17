import { Button, useClipboard, useToast } from '@chakra-ui/react';
import { FiShare } from 'react-icons/fi';

interface Props {
  slide: number;
  companyName: string;
}

export const ShareStoryButton = ({ slide, companyName }: Props) => {
  const toast = useToast();

  const { onCopy, hasCopied } = useClipboard(
    `https://wrapped.justinzha.ng/s/${slide}${
      companyName ? `?hi=${companyName}` : ''
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
          title: 'Copied to clipboard!',
          status: 'success',
          duration: 8000,
          isClosable: true,
        });
      }}
      size='lg'
    >
      Share this story
    </Button>
  );
};
