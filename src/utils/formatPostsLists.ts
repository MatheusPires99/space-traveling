/* eslint-disable import/no-duplicates */
import { Document } from '@prismicio/client/types/documents';
import { RichText } from 'prismic-dom';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

function formatPostsData(posts: Document[]) {
  const postsFormatted = posts.map(post => {
    return {
      uid: post.uid,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
        { locale: ptBR },
      ),
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
