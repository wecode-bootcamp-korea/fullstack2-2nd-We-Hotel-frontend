import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';
import { BookOpen } from '@styled-icons/feather/BookOpen';
import { Triangle } from '@styled-icons/feather/Triangle';

export const detailModalId = 'modal_1';
export const mapModalId = 'modal_3';

export const OPTIONS = [
  { e: 'ONEDAY', k: '1박 평균가격' },
  { e: 'TOTAL', k: '총가격' },
];

export const TABNAME = [
  { e: 'HOME', k: '홈', i: <HomeAlt />, a: '/' },
  {
    e: 'RESVERSATION',
    k: '예약/구매내역',
    i: <BookOpen />,
    a: '/reservation',
  },
  {
    e: 'MYDAILY',
    k: '마이데일리',
    i: <Triangle />,
    a: '/mydaily',
  },
];
