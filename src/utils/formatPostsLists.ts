import { Document } from '@prismicio/client/types/documents';
import { RichText } from 'prismic-dom';

import formatDate from './formatDate';

function formatPostsData(posts: Document[]) {
  const postsFormatted = posts.map(post => {
    return {
      uid: post.uid,
      first_publication_date: formatDate(post.first_publication_date),
      data: {
        title: RichText.asText(post.data.title),
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  return postsFormatted;
}

export default formatPostsData;
