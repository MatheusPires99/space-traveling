import Link from 'next/link';

import { Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { PostInfo } from '../../PostInfo';

type PostLinkProps = {
  uid: string;
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
};

export function PostLink({
  uid,
  title,
  subtitle,
  author,
  createdAt,
}: PostLinkProps) {
  const infos = [
    {
      text: createdAt,
      icon: FiCalendar,
    },
    {
      text: author,
      icon: FiUser,
    },
  ];

  return (
    <Link href={`/post/${uid}`} passHref>
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
          {title}
        </Heading>

        <Text fontSize="lg">{subtitle}</Text>

        <PostInfo infos={infos} />
      </ChakraLink>
    </Link>
  );
}
