import Link from 'next/link';

import {
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  HStack,
} from '@chakra-ui/react';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { PostInfo } from './PostInfo';

type PostLink = {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
};

export function PostLink() {
  return (
    <Link href="" passHref>
      <ChakraLink
        display="flex"
        flexDir="column"
        role="group"
        _hover={{ textDecoration: 'none' }}
      >
        <Heading
          color="gray.50"
          mb="2"
          fontSize="3xl"
          transition="ease"
          transitionDuration="200ms"
          _groupHover={{ color: 'pink.400' }}
        >
          Como utilizar Hooks
        </Heading>

        <Text fontSize="lg">
          Pensando em sincronização em vez de ciclos de vida.
        </Text>

        <Flex mt="6" align="center">
          <HStack spacing="6">
            <PostInfo icon={FiCalendar} content="19 Abr 2021" />
            <PostInfo icon={FiUser} content="Joseph Oliveira" />
          </HStack>
        </Flex>
      </ChakraLink>
    </Link>
  );
}
