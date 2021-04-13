import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { format } from 'date-fns';

import { Header, PostsList, Wrapper } from '../components';
import { getPrismicClient } from '../services';

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

      <Wrapper>
        <PostsList postsPagination={postsPagination} />
      </Wrapper>
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

  const posts = response.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
      ),
      data: {
        title: RichText.asText(post.data.title),
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  const { page, results_per_page, total_results_size, next_page } = response;

  const postsPagination = {
    page,
    results_per_page,
    total_results_size,
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
