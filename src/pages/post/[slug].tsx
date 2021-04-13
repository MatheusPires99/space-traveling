import { GetStaticPaths, GetStaticProps } from 'next';

import { RichText } from 'prismic-dom';

import { Header, Post as PostComponent } from '../../components';
import { getPrismicClient } from '../../services';
import { formatDate } from '../../utils';

export interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
      alt: string;
    };
    author: string;
    content: {
      heading: string;
      body: string;
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />

      <PostComponent post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  // const posts = await prismic.query(TODO);

  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});

  const { data } = response;

  const postContent = data.content.map(content => {
    return {
      heading: RichText.asText(content.heading),
      body: RichText.asHtml(content.body),
    };
  });

  const post = {
    title: RichText.asText(data.title),
    banner: {
      url: data.banner.url,
      alt: data.banner.alt,
    },
    author: data.author,
    content: postContent,
  };

  return {
    props: {
      post: {
        data: post,
        first_publication_date: formatDate(response.first_publication_date),
      },
    },
    revalidate: 1000 * 60 * 30, // 30 minutes
  };
};
