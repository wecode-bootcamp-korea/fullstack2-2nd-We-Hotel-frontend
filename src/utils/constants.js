export const ROUTES = {
  GET_OPTION_PRICE: 'http://localhost:8000/room/price',
  DETAIL_CAROCEL: id => `http://localhost:8000/room/${id}/image`,
  DETAIL_INFO: 'http://localhost:8000/room',
};

export const detailHotelInit = [
  {
    id: 1,
    title: '쵝오호텔',
    grade: '1등급',
    likeCount: 50,
    rooms: [
      {
        id: 1,
        grade: '다락방',
        option: '초특가 데일리',
        price: 5000,
        image:
          'https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0734.jpg.thumb.768.768.jpg',
      },
    ],
  },
];

export const detailCarocelInit = [
  {
    id: 1,
    name: 'hotel1',
    url: 'https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0734.jpg.thumb.768.768.jpg',
  },
  {
    id: 2,
    name: 'hotel2',
    url: 'https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0734.jpg.thumb.768.768.jpg',
  },
  {
    id: 3,
    name: 'hotel3',
    url: 'https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0734.jpg.thumb.768.768.jpg',
  },
];

export const detailRoomInit = [
  {
    id: 1,
    grade: '다락방',
    option: '초특가 데일리',
    price: 5000,
    image:
      'https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0734.jpg.thumb.768.768.jpg',
  },
];

export const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const NOTABROUTE = ['detail', 'search', 'login', 'signup'];
