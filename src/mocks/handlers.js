import { rest } from 'msw';

export const handlers = [
  rest.get('/carousel', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'seoul',
          url: 'https://korean.visitseoul.net/comm/getImage?srvcId=IMAGEDATAOPN&parentSn=3842&fileTy=ATTACH&fileNo=1',
        },
        {
          id: 2,
          name: 'seoul',
          url: 'https://images.unsplash.com/photo-1540998145333-e2eef1a9822d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2VvdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          name: 'seoul',
          url: 'https://images.unsplash.com/photo-1538669715315-155098f0fb1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlb3VsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          name: 'busan',
          url: 'https://images.unsplash.com/photo-1611372876693-4dc4153dee61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 5,
          name: 'busan',
          url: 'https://images.unsplash.com/photo-1591520284162-8e64eceebacf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 6,
          name: 'jeju',
          url: 'https://images.unsplash.com/photo-1612977423916-8e4bb45b5233?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGplanV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
            accommodation_id: 121,
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
            accommodation_id: 122,
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
            accommodation_id: 123,
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
            accommodation_id: 124,
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
            accommodation_id: 3110,
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
            accommodation_id: 3111,
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
            accommodation_id: 3112,
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
            accommodation_id: 3113,
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
            accommodation_id: 2210,
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
            accommodation_id: 2211,
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
            accommodation_id: 2212,
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
            accommodation_id: 2213,
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
            accommodation_id: 1124,
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
            accommodation_id: 1125,
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
            accommodation_id: 1126,
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
            accommodation_id: 1127,
            image_url:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKl9b28K8nVp_O4Slm6x6YRRwfq36lTJNsA&usqp=CAU',
            price: 330000,
            percentage: 66,
          },
        ],
      }),
      ctx.status(200),
      ctx.delay(10)
    );
  }),
  rest.get('/category', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          locationName: '서울',
          url: 'https://cdn.dribbble.com/users/2285755/screenshots/5966821/media/3b0872a0af111b610d8b3dba8e8f95b1.png?compress=1&resize=400x300',
        },
        {
          id: 2,
          locationName: '부산',
          url: 'https://cdn-icons-png.flaticon.com/512/2090/2090100.png',
        },
        {
          id: 3,
          locationName: '제주',
          url: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/10/urbanbrush-20181029095026094622.png',
        },
        {
          id: 4,
          locationName: '강원',
          url: 'https://media.istockphoto.com/vectors/bandit-chest-island-pirate-pirates-sailing-line-colored-icon-signs-vector-id1346046107?b=1&k=20&m=1346046107&s=170667a&w=0&h=0WvgAg_IcqcItbMgJI4FLonb3b8qQPgfSHCbO31UX1Q=',
        },
      ]),
      ctx.status(200),
      ctx.delay(10)
    );
  }),
  rest.get('/accommodation/review/:id', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          accomodation_id: 123456,
          score: 4.7,
          review_content:
            '대체적으로 룸컨디션은 만족했으나 전에는 없었던 발렛파킹은 왜 생긴걸까요? 정문에서부터 지하1층까지 차를 직접 투숙객이 가지고 가서 정말 딱 주차만 대행해줍니다. 비용 오천원를 떠나서 외출할때 키받고 차 가져다주는 시간도 꽤 걸리고 불편합니다. 꽤 자주 방문했는데 이거때문에 다시 방문 안할거같습니다.',
          nickname: '하하하',
          roomsName: '디럭스룸',
          rooms_id: 111,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 2,
          accomodation_id: 123456,
          score: 4.8,
          review_content:
            '1. 룸이 아쉬움 어두컴컴했고, 방마다 뷰가 다르겠지만, 문을 열면 바로 앞건물에 뷰가 가렸음. 2. 발렛비 5천원 따로 들고 발렛서비스가 조금 불편함 (체크아웃 후 차 빼는데 5~7분 시간 소요) 3. 루프탑 야경 너무 좋았음 4. 1층 바 방문했는데 직원 친절하고 분위기 정말 좋았음 (재방문 예정) 5. 조식도 나쁘지 않았음',
          nickname: '하하하',
          roomsName: '슈페리어룸',
          rooms_id: 112,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/95/8c/e2/villa-agrippina-gran.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 3,
          accomodation_id: 123456,
          score: 4.3,
          review_content:
            '침구가 좋다는 말이 있어서 기대했는데 정말 좋았어요. 오랜만에 꿀잠 잤네요. 발렛은 서비스가 안좋다는 말이 많아사 걱정했는데 직원분들도 많으시고 전부 친절하셨어요. 4단계인데 조식 뷔페도 운영중이고 음식 가지수가 많진않은데 하나하나 전부 맛있었어요. 재방문의사 있습니다',
          nickname: '하하하',
          roomsName: 'VIP룸',
          rooms_id: 113,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/95/8c/dd/villa-agrippina-gran.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 4,
          accomodation_id: 123456,
          score: 4.6,
          review_content:
            '침구 푹신푹신해서 너무 좋았어요! 조식도 석식도 다 맛있게 먹고 갑니다!! 접시 바로바로 치워주시고 친절하셔서 너무너무 감사했어요! 올해 첫 휴가로 여기오게 되었는데 너무 만족하고가요! 아! 주차공간이 조금 부족하고 발렛비용나오고 외출할때 바로 나갈수없고 기다려야해서 그게 제일 아쉬웠어요~',
          nickname: '하하하',
          roomsName: '디럭스룸',
          rooms_id: 111,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/95/8c/b5/villa-agrippina-gran.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 5,
          accomodation_id: 123456,
          score: 4.2,
          review_content:
            '전체적으로 매우 만족했던 호텔인 것 같아요! 로비에서 부터 좋은 향기가 나서 들어가자마자 기분이 좋았고 직원 분들 또한 아주 꼼꼼하게 본인확인 해주시고 이용시설, 주의사항 등 모두 잘 알려주셔서 기분이 좋았습니다! 방에 들어가자마자 쾌적하고 분위기 자체가 너무 좋았습니다 코너방에 묵어서 뷰가 없었던게 조금 아쉬웠지만 그 부분도 직원 분께서 이미 말씀해주신 사항이라 충분히 뷰가 아니더라도 묵고싶은 호텔이었어요! 침구류도 깔끔하고 매우 편안했습니다 침구류에서도 좋은 향이 나서 더더욱 만족했습니다 다음에도 또 방문의사가 있을 정도로 좋았던 호텔이었어요 감사합니다',
          nickname: '하하하',
          roomsName: '프리미엄룸',
          rooms_id: 115,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/8d/0b/29/renaissance-suite.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 6,
          accomodation_id: 123456,
          score: 4.4,
          review_content:
            '글래드 킹이고 12층이여서 나름 뷰 기대했는데 커튼열자 건물벽뷰ㅎ 생각보다 벽이 가깝더라고요 그래서 사진찍을게 없었답니다 방이 전체적으로 어두워요. 그리고 화장실은 굉장히 넓었는데 욕조가 조금 작았습니다. 그리고 또 환풍기소리인지 너무 커 맞는지는 모르겠지만 바람세기 조절하는게 있길래 1단으로했는데 처음에는 조용했으나 새벽되니 다시 소리가 점점 커졌습니다 침대는 푹신해서 좋았지만 환풍기소리가 커 잠을 자기 조금 어려웠습니다.',
          nickname: '하하하',
          roomsName: '디럭스룸',
          rooms_id: 111,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/8d/0b/1e/one-bedroom-master-suite.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 7,
          accomodation_id: 123456,
          score: 4.1,
          review_content:
            '그리츠에서 저녁식사 후 이용했어요. 체크인시 프론트에서 주차를 문의했는데 직원분이 발렛했는지 묻길래 직접 주차했다고 답하니 그럼 그냥 출차하면 된다고 하더군요. 그런데 정작 출차할 때 요금이 과금되었어요. 그래서 프론트로 전화했더니 객실번호, 예약자, 발렛했는지를 재차 묻더니 주차관리직원한테 투숙했다고 말하라고 하더군요. 문제는 주차관리 직원은 부재중이었고 다시 프론트로 전화하니 직원이 발렛파킹 중이라 없는 것 같다고 연락한다고 했고 그후 주차관리직원이 온 후에야 출차할 수 있었습니다. 체크인시 응대한 직원과 두번의 전화를 받은 직원은 같은 직원이었습니다. 그런데도 본인의 잘못된 안내로 고객이 불편을 겪고 출차시 두번이나 프론트로 전화했음에도 형식적인 사과 조차 없더군요. 저처럼 차 돌리고 전화하기 번거로워 주차요금 그냥 내고 나가는 분들도 있을 것 같아 참고하시라고 올려봅니다.',
          nickname: '하하하',
          roomsName: '슈페리어룸',
          rooms_id: 112,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/1d/b8/5a/ruime-tweepersoonskamer.jpg?w=600&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 8,
          accomodation_id: 123456,
          score: 5.0,
          review_content:
            '침구야 말할것도 없고 실용적이고 쾌적하니 전반적으로 참 좋았습니다. 직원분들도 친절하고 방문할 때 마다 만족하는 곳입니다. 청소도 엄청 깔끔하게 ㅎㅏ시는 모습을 보았어요~ 단, 주차장 발렛비만 해결되면 더할 나위 없이 좋겠어요~ 숙박의 경우는 발렛비를 제외해 주는 시스템이 생기면 좋겠습니다~',
          nickname: '하하하',
          roomsName: '디럭스룸',
          rooms_id: 111,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/8d/0b/1a/villa-agrippina-private.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 9,
          accomodation_id: 123456,
          score: 4.9,
          review_content:
            '시설은 좋은데 침구도 좋아요 .. 근데!!! 진짜 소음이 장난 아닙니다 위에서 무슨 침대를 옮기는 건지 진짜 끄는 소리 장난 아니고 우당탕 소리가 몇시간동안 계속 나서 진짜 자기 힘들었습니다',
          nickname: '하하하',
          roomsName: '스탠다드룸',
          rooms_id: 110,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/8d/0b/18/villa-agrippina-private.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
        {
          id: 10,
          accomodation_id: 123456,
          score: 5.0,
          review_content:
            '침구와 시설 전반적으로 깨끗하고 단정하다는 인상을 받았습니다. 개인적으로 그리츠 레스토랑 디너 평이 좋아서 기대가 되었고, 실제로 음식을 먹어보니 디저트까지 뭐하나 빠지는 음식없이 맛과 질이 훌륭했던것 같습니다. 특히 양갈비와 짬뽕이 맛이 좋았습니다.',
          nickname: '하하하',
          roomsName: 'VIP룸',
          rooms_id: 113,
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/8d/0b/15/villa-agrippina-private.jpg?w=1200&h=-1&s=1',
          review_img: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/53/c2/52/facade-swimming-pool.jpg?w=1200&h=-1&s=1',
          ],
          create_at: '2021.10.10',
        },
      ]),
      ctx.status(200),
      ctx.delay(10)
    );
  }),
  rest.get('/detail', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          accomodation_id: 1,
          name: '파크하얏트부산호텔',
          detail_address: '부산 해운대구 마린시티1로 51',
        },
      ]),
      ctx.status(200),
      ctx.delay(10)
    );
  }),
];
