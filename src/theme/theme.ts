import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: 'white',
        },
      },
    },
  },
});
