import { Document } from '@prismicio/client/types/documents';

import formatDate from './formatDate';

function formatPostsData(posts: Document[]) {
  const postsFormatted = posts.map(post => {
    return {
      uid: post.uid,
      first_publication_date: formatDate(post.first_publication_date),
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  return postsFormatted;
}

export default formatPostsData;
