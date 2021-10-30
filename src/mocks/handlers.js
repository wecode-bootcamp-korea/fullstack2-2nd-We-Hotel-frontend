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
  rest.get('/locations', (req, res, ctx) => {
    return res(
      ctx.json({
        seoul: [
          {
            id: 1,
            towns_name: '서울',
            grade: '특급',
            accommodation: '조선 팰리스 서울 강남 컬렉션 호텔',
            image_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbpdqk-gYJLr0rGcdBQrt8gZPBQVPAfptzg&usqp=CAU',
            price: 660000,
            percentage: 43,
          },
          {
            id: 2,
            towns_name: '서울',
            grade: '특2급',
            accommodation: '신라스테이 마포',
            image_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXuFPlO8RqyvoeRaw61siM_9X10S94D6_7g&usqp=CAU',
            price: 275000,
            percentage: 73,
          },
          {
            id: 3,
            towns_name: '서울',
            grade: '특2급',
            accommodation: '글래드 여의도',
            image_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWdG_lGjzO6w2pRPulCBOahkjKdE8ZlFXIg&usqp=CAU',
            price: 352000,
            percentage: 79,
          },
          {
            id: 4,
            towns_name: '서울',
            grade: '특2급',
            accommodation: '글래드 마포',
            image_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQdauVyY75AqYX7EZWDZ5zTywF04RzG-rEw&usqp=CAU',
            price: 308000,
            percentage: 78,
          },
        ],
        pusan: [
          {
            id: 1,
            towns_name: '부산',
            grade: '특급',
            accommodation: '그랜드 조선 부산',
            image_url:
              'https://www.hyundaicard.com/upload/cpc/cs/%EA%B7%B8%EB%9E%9C%EB%93%9C%20%EC%A1%B0%EC%84%A0%20%EB%B6%80%EC%82%B0_%EC%9D%B4%EB%AF%B8%EC%A7%802jpg_1609898622351.jpg',
            price: 15620000,
            percentage: 54,
          },
          {
            id: 2,
            towns_name: '부산',
            grade: '특급',
            accommodation: '시그니엘 부산',
            image_url:
              'https://www.lottehotel.com/content/dam/lotte-hotel/global/common/company/busan-signiel.jpg',
            price: 770000,
            percentage: 23,
          },
          {
            id: 3,
            towns_name: '부산',
            grade: '특2급',
            accommodation: 'H Avenue 광안리점',
            image_url:
              'https://cdn.imweb.me/upload/S201803135aa781f16a52b/5ab44f2a0315a.png',
            price: 420000,
            percentage: 82,
          },
          {
            id: 4,
            towns_name: '부산',
            grade: '특급',
            accommodation: '파크 하얏트 부산',
            image_url:
              'https://www.visitbusan.net/uploadImgs/files/cntnts/20200316132549282_thumbL',
            price: 340000,
            percentage: 48,
          },
        ],
        jeju: [
          {
            id: 1,
            towns_name: '제주',
            grade: '특1급',
            accommodation: '그랜드 하얏트 제주',
            image_url:
              'https://www.hotelrestaurant.co.kr/data/photos/20200937/art_15994419539464_059e8f.jpg',
            price: 490000,
            percentage: 63,
          },
          {
            id: 2,
            towns_name: '제주',
            grade: '특급',
            accommodation: '제주 신라 호텔',
            image_url:
              'https://pix10.agoda.net/hotelImages/62746/-1/6bc788a8d74c2f6fef6e10496e4cc722.jpg?s=1024x768',
            price: 847000,
            percentage: 28,
          },
          {
            id: 3,
            towns_name: '제주',
            grade: '특1급',
            accommodation: '해비치 호텔&리조트',
            image_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlctz14sI9B_fDGBOAnb6eC2-qBo0AWo0zQ&usqp=CAU',
            price: 370000,
            percentage: 43,
          },
          {
            id: 4,
            towns_name: '제주',
            grade: '특1급',
            accommodation: '랜딩관 제주신화월드 호텔앤리조트',
            image_url:
              'https://image.ajunews.com/content/image/2017/12/14/20171214093041248785.jpg',
            price: 320000,
            percentage: 48,
          },
        ],
        gangwon: [
          {
            id: 1,
            towns_name: '강원',
            grade: '비즈니스',
            accommodation: '평창 라마다호텔&스위트 바이 윈덤',
            image_url:
              'https://pix10.agoda.net/hotelImages/4973710/-1/4f96b673feb7dd6b6e9c9837ce058b19.jpg?s=1024x768',
            price: 330000,
            percentage: 68,
          },
          {
            id: 2,
            towns_name: '강원',
            grade: '특2급',
            accommodation: '호텔 탑스텐 정동진',
            image_url:
              'http://www.newsworks.co.kr/news/photo/201807/200877_89358_3133.jpg',
            price: 267000,
            percentage: 77,
          },
          {
            id: 3,
            towns_name: '강원',
            grade: '비즈니스',
            accommodation: '강릉 세인트존스호텔',
            image_url:
              'https://images.trvl-media.com/hotels/21000000/20450000/20447100/20447014/d875c42f.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium',
            price: 340000,
            percentage: 69,
          },
          {
            id: 4,
            towns_name: '강원',
            grade: '비즈니스',
            accommodation: '라마다 속초 호텔',
            image_url:
              'https://lh3.googleusercontent.com/proxy/9L47sj0iXH9QS4ySL7AR2lshQC7N4xm3P1fRjgM9LkNXKnl5-GC11RHZ_UwlN7i8vZ_EscP0tZCTwp-qJVitLfZC1xl58jf2KV4yQ_frHZkXCl1EuUcB',
            price: 330000,
            percentage: 66,
          },
        ],
      }),
      ctx.status(200),
      ctx.delay(10)
    );
  }),
];
