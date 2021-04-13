import Link from 'next/link';

import { Image, Link as ChakraLink } from '@chakra-ui/react';

import { Wrapper } from '../Wrapper';

export function Header() {
  return (
    <Wrapper as="header" h={105} flexDir="row" align="center">
      <Link href="/" passHref>
        <ChakraLink>
          <Image src="/logo.svg" alt="logo" w="60" />
        </ChakraLink>
      </Link>
    </Wrapper>
  );
}
