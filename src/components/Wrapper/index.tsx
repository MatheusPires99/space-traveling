import { ReactNode } from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';

type WrapperProps = FlexProps & {
  children: ReactNode;
};

export function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <Flex w="100%" maxWidth={700} mx="auto" px="6" flexDir="column" {...rest}>
      {children}
    </Flex>
  );
}
