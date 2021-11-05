export const ROUTES = {
  GET_OPTION_PRICE: 'http://localhost:8000/room/price',
  DETAIL_CAROCEL: id => `http://localhost:8000/room/${id}/image`,
  DETAIL_INFO: 'http://localhost:8000/room',
};

export const detailHotelInit = [
  {
    id: 1,
    title: '파크하얏트부산',
    grade: '5성급',
    likeCount: 25,
    rooms: [
      {
        id: 1,
        grade: '스탠다드',
        option: '초특가',
        price: 5000,
        image:
          'https://img.dailyhotel.me/resources/room/000/023/845/592700/ddddssss_62120192.jpg',
      },
      {
        id: 2,
        grade: '디럭스',
        option: '초특가',
        price: 15000,
        image:
          'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw5MXx8aG90ZWx8ZW58MHx8fHwxNjM1OTM3OTYz&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 3,
        grade: '이그제큐티브',
        option: '초특가',
        price: 20000,
        image:
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw5Mnx8aG90ZWx8ZW58MHx8fHwxNjM1OTM3OTYz&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 4,
        grade: '스위트',
        option: '초특가',
        price: 30000,
        image:
          'https://images.unsplash.com/photo-1558976825-6b1b03a03719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw5Nnx8aG90ZWx8ZW58MHx8fHwxNjM1OTM3OTYz&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 5,
        grade: '디럭스',
        option: '초특가',
        price: 20000,
        image:
          'https://images.unsplash.com/photo-1584132905271-512c958d674a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw3Mnx8aG90ZWx8ZW58MHx8fHwxNjM1OTM4MDM4&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 6,
        grade: '스위트',
        option: '초특가',
        price: 50000,
        image:
          'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw3Nnx8aG90ZWx8ZW58MHx8fHwxNjM1OTM4MDM4&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 6,
        grade: '스탠다드',
        option: '초특가',
        price: 10000,
        image:
          'https://images.unsplash.com/photo-1561049933-c8fbef47b329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw2N3x8aG90ZWx8ZW58MHx8fHwxNjM1OTM4MDU1&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 7,
        grade: '스위트',
        option: '초특가',
        price: 100000,
        image:
          'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw1NXx8aG90ZWx8ZW58MHx8fHwxNjM1OTM4MDcy&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 8,
        grade: '디럭스',
        option: '초특가',
        price: 30000,
        image:
          'https://images.unsplash.com/photo-1592229505726-ca121723b8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw3MHx8aG90ZWx8ZW58MHx8fHwxNjM1OTM4MDU1&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 9,
        grade: '스위트',
        option: '초특가',
        price: 40000,
        image:
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHwzNHx8aG90ZWx8ZW58MHx8fHwxNjM1OTM4MTY4&ixlib=rb-1.2.1&q=80&w=400',
      },
      {
        id: 10,
        grade: '스탠다드',
        option: '초특가',
        price: 30000,
        image:
          'https://images.unsplash.com/photo-1584132905271-512c958d674a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY4NDl8MHwxfHNlYXJjaHw3Mnx8aG90ZWx8ZW58MHx8fHwxNjM1OTM4MDM4&ixlib=rb-1.2.1&q=80&w=400',
      },
    ],
  },
  {
    id: 2,
    title: '해운대그랜드호텔',
    grade: '5성급',
    likeCount: 35,
    rooms: [
      {
        id: 1,
        grade: '다락방',
        option: '초특가 데일리',
        price: 5000,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
  },
  {
    id: 3,
    title: '해운대그랜드호텔',
    grade: '5성급',
    likeCount: 35,
    rooms: [
      {
        id: 1,
        grade: '다락방',
        option: '초특가 데일리',
        price: 5000,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
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
