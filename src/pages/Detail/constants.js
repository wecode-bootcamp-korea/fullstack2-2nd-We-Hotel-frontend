import { faPhabricator } from '@fortawesome/free-brands-svg-icons';
import { faBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { TabIcon } from '../../styles/detailStyles';

export const detailModalId = 'modal_1';

export const OPTIONS = [
  { e: 'ONEDAY', k: '1박 평균가격' },
  { e: 'TOTAL', k: '총가격' },
];

export const TABNAME = [
  { e: 'HOME', k: '홈', i: <TabIcon icon={faHome} />, a: '/' },
  {
    e: 'RESVERSATION',
    k: '예약/구매내역',
    i: <TabIcon icon={faBook} />,
    a: '/reservation',
  },
  {
    e: 'MYDAILY',
    k: '마이데일리',
    i: <TabIcon icon={faPhabricator} />,
    a: '/mydaily',
  },
];
