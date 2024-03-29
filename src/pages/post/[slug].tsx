import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Prismic from '@prismicio/client';
import { Heading } from '@chakra-ui/react';

import { Header, Post as PostComponent } from '../../components';
import { getPrismicClient } from '../../services';

export interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Heading as="h1" color="gray.50">
        Carregando...
      </Heading>
    );
  }

  return (
    <>
      <Header />

      <PostComponent post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.predicates.at('document.type', 'post'),
  ]);

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});

  const { uid, first_publication_date, data } = response;

  const postContent = data.content.map(content => {
    return {
      heading: content.heading,
      body: content.body,
    };
  });

  const post = {
    title: data.title,
    subtitle: data.subtitle,
    banner: {
      url: data.banner.url,
    },
    author: data.author,
    content: postContent,
  };

  return {
    props: {
      post: {
        uid,
        data: post,
        first_publication_date,
      },
    },
    revalidate: 1000 * 60 * 30, // 30 minutes
  };
};
