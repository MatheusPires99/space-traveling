import { Flex } from '@chakra-ui/react';

import { Post as PostType } from '../../pages/post/[slug]';
import { PostBanner } from './PostBanner';
import { PostContent } from './PostContent';

type PostProps = {
  post: PostType;
};

export function Post({ post }: PostProps) {
  return (
    <Flex as="main" flexDir="column">
      <PostBanner src={post.data.banner.url} alt={post.data.title} />

      <PostContent
        title={post.data.title}
        createdAt={post.first_publication_date}
        author={post.data.author}
        content={post.data.content}
      />
    </Flex>
  );
}
