import { useState } from 'react';

import { Box, Button, Stack } from '@chakra-ui/react';

import { PostLink } from './PostLink';
import { PostPagination } from '../../pages';
import { formatPostsLists } from '../../utils';
import { Wrapper } from '../Wrapper';

type PostsListProps = {
  postsPagination: PostPagination;
};

export function PostsList({ postsPagination }: PostsListProps) {
  const [posts, setPosts] = useState(postsPagination.results ?? []);
  const [nextPage, setNextPage] = useState(postsPagination.next_page ?? '');

  function handleNextPage() {
    fetch(nextPage)
      .then(response => response.json())
      .then(data => {
        const formattedPosts = formatPostsLists(data.results);

        setPosts(state => [...state, ...formattedPosts]);
        setNextPage(data.next_page);
      });
  }

  return (
    <Wrapper flexDir="column">
      <Stack spacing="12" mt="12">
        {posts.map(post => (
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

      {!!nextPage && (
        <Box mt="16" alignSelf="flex-start">
          <Button
            color="pink.400"
            variant="link"
            fontSize="lg"
            onClick={handleNextPage}
          >
            Carregar mais posts
          </Button>
        </Box>
      )}
    </Wrapper>
  );
}
