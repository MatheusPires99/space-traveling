import { Stack } from '@chakra-ui/react';

import { PostLink } from './PostLink';

export function PostsList() {
  return (
    <Stack spacing="12" mt="12">
      <PostLink />
      <PostLink />
      <PostLink />
      <PostLink />
    </Stack>
  );
}
