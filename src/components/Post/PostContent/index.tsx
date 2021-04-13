/* eslint-disable react/no-array-index-key */
import { Box, Heading, Stack } from '@chakra-ui/react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { RichText } from 'prismic-dom';

import { Wrapper } from '../../Wrapper';
import { PostInfo } from '../../PostInfo';
import { formatDate } from '../../../utils';

type PostContentProps = {
  title: string;
  createdAt: string;
  author: string;
  content: {
    heading: string;
    body: {
      text: string;
    }[];
  }[];
};

export function PostContent({
  title,
  createdAt,
  author,
  content,
}: PostContentProps) {
  const infos = [
    {
      icon: FiCalendar,
      text: formatDate(createdAt),
    },
    {
      icon: FiUser,
      text: author,
    },
    {
      icon: FiClock,
      text: '4 min',
    },
  ];

  const postContent = content.map(c => {
    return {
      heading: c.heading,
      body: RichText.asHtml(c.body),
    };
  });

  return (
    <Wrapper my="20" align="flex-start">
      <Heading as="h1" color="gray.50" fontSize="5xl">
        {title}
      </Heading>

      <PostInfo infos={infos} />

      <Stack mt="16">
        {postContent.map((c, index) => (
          <Box key={index}>
            <Heading as="h3" fontSize="4xl" color="gray.50" mb="12">
              {c.heading}
            </Heading>

            <Box
              className="post-body"
              fontSize="lg"
              dangerouslySetInnerHTML={{ __html: c.body }}
            />
          </Box>
        ))}
      </Stack>
    </Wrapper>
  );
}
