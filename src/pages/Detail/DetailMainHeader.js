import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Border from '../../components/Border/Border';
import { MainHeader, Message, Title } from '../../styles/detailStyles';

const DetailMainHeader = ({ hotelInfo }) => {
  return (
    <MainHeader>
      <Message>{hotelInfo[0].grade}</Message>
      <Title>{hotelInfo[0].title}</Title>
      <Message>
        <ThumbIconItem className="thumbIcon" icon={faThumbsUp} />
        <LikeCount>{hotelInfo[0].likeCount}</LikeCount>
        <LikeMessage>명이 좋아합니다 </LikeMessage>
      </Message>
      <Border margin={5} />
      <Message>데일리 트루어워즈</Message>
    </MainHeader>
  );
};

export default DetailMainHeader;

const ThumbIconItem = styled(FontAwesomeIcon)`
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors['blue-100']};
  font-size: 0.9rem;
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
