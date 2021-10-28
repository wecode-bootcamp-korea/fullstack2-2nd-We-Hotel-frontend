import { rest } from 'msw';

export const handlers = [
  rest.get('/carousel', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'hotel1',
          url: 'https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0734.jpg.thumb.768.768.jpg',
        },
        {
          id: 2,
          name: 'hotel2',
          url: 'https://file.newswire.co.kr/data/datafile2/thumb_480/2010/11/1994033522_20101111184713_1239172861.jpg',
        },
        {
          id: 3,
          name: 'hotel3',
          url: 'https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider3-1.jpg',
        },
        {
          id: 4,
          name: 'hotel4',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMW_wHSlL6nR57cbGrSA2az6-AeSYdgTNUxK0cRmoWQDneZUdtl7AK4pWYNAzIRen3Qw&usqp=CAU',
        },
        {
          id: 5,
          name: 'hotel5',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7qX4IWyWKeJUF29HvDZoGLRvCb4qFeD3NfgtRXtJmvQILKw0v2vCQ-yunO_2EdeNYZY&usqp=CAU',
        },
        {
          id: 6,
          name: 'hotel6',
          url: 'https://exp.cdn-hotels.com/hotels/1000000/10000/8800/8738/1c836fa3_y.jpg?impolicy=fcrop&w=500&h=333&q=high',
        },
      ]),
      ctx.status(200),
      ctx.delay(10)
    );
  }),
];
