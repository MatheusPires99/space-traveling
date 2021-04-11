import Link from 'next/link';

import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={700}
      mx="auto"
      h={105}
      px="6"
      align="center"
    >
      <Link href="/" passHref>
        <ChakraLink>
          <Image src="/logo.svg" alt="logo" w="60" />
        </ChakraLink>
      </Link>
    </Flex>
  );
}
