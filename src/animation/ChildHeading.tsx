import { Heading } from '@chakra-ui/react';
import { AnimateChild } from './AnimateChild';

import { item } from './variants';

interface Props extends React.ComponentProps<typeof Heading> {
  children: React.ReactNode;
  variants?: any;
}

export const ChildHeading = ({
  children,
  variants = item,
  ...props
}: Props) => {
  return (
    <AnimateChild variants={variants}>
      <Heading {...props}>{children}</Heading>
    </AnimateChild>
  );
};
