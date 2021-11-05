import styled from 'styled-components';
import Border from '../../components/Border/Border';
import { MainHeader, Message, Title } from '../../styles/detailStyles';
import { ThumbsUp } from '@styled-icons/fa-regular/ThumbsUp';

const DetailMainHeader = ({ hotelInfo }) => {
  return (
    <MainHeader>
      <Message>{hotelInfo && hotelInfo[0]?.grade}</Message>
      <Title>{hotelInfo && hotelInfo[0]?.title}</Title>
      <Message>
        <ThumbIconItem />
        <LikeCount>{hotelInfo.likeCount}</LikeCount>
        <LikeMessage>명이 좋아합니다 </LikeMessage>
      </Message>
      <Border margin={5} />
      <Message>데일리 트루어워즈</Message>
    </MainHeader>
  );
};

export default DetailMainHeader;

const ThumbIconItem = styled(ThumbsUp)`
  margin-right: 0.2rem;
  margin-bottom: 0.5rem;
  width: 1.1rem;
  color: ${({ theme }) => theme.colors['blue-100']};
  cursor: pointer;
`;

const LikeCount = styled(Title)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors['font-color']};
  font-weight: 600;
`;

const LikeMessage = styled(Message)`
  font-size: 0.9rem;
  margin-left: 0;
`;
