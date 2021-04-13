import { Stack } from '@chakra-ui/react';

import { PostLink } from './PostLink';
import { PostPagination } from '../../pages';

type PostsListProps = {
  postsPagination: PostPagination;
};

export function PostsList({ postsPagination }: PostsListProps) {
  return (
    <Stack spacing="12" mt="12">
      {postsPagination.results.map(post => (
        <PostLink
          key={post.uid}
          uid={post.uid}
          title={post.data.title}
          subtitle={post.data.subtitle}
          author={post.data.author}
          createdAt={post.first_publication_date}
        />
      ))}
    </Stack>
  );
}
