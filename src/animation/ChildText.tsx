import { Text } from '@chakra-ui/react';
import { AnimateChild } from './AnimateChild';
import { item } from './variants';

interface Props extends React.ComponentProps<typeof Text> {
  children: React.ReactNode;
  rest?: any;
  variants?: any;
}

export const ChildText = ({ children, variants = item, ...props }: Props) => {
  return (
    <AnimateChild variants={variants}>
      <Text {...props}>{children}</Text>
    </AnimateChild>
  );
};
