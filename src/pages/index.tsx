import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';

import { Header, PostsList } from '../components';
import { getPrismicClient } from '../services';
import { formatPostsLists } from '../utils';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

export interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <Header />

      <PostsList postsPagination={postsPagination} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.subtitle', 'post.author'],
      pageSize: 6,
    },
  );

  const { results, next_page } = response;

  const posts = formatPostsLists(results);

  const postsPagination = {
    next_page,
    results: posts,
  };

  return {
    props: {
      postsPagination,
    },
    revalidate: 1000 * 60 * 30, // 30 minutes
  };
};
