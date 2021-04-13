/* eslint-disable import/no-duplicates */
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

function formatDate(date: string) {
  return format(new Date(date), 'dd MMM yyyy', { locale: ptBR });
}

export default formatDate;
