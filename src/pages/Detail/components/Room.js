import styled from 'styled-components';
import {
  BasicButton,
  BasicContainer,
  Message,
  Title,
} from '../../../styles/detailStyles';
import { NumberCommas } from '../../../utils/commonUtils';
import { useHistory } from 'react-router-dom';

const Room = ({ calPrices, item: { grade, option, price, image, id } }) => {
  const history = useHistory();
  return (
    <Conatiner>
      <RoomWrapper>
        <Image src={image} width={'120rem'} height={'150rem'} />
        <Column>
          <Wrapper>
            <RoomName>{grade}</RoomName>
            <Message>{option}</Message>
          </Wrapper>
          <PriceMessage>
            <Price>
              {calPrices && Object.keys(calPrices).length > 0
                ? NumberCommas(calPrices[id])
                : NumberCommas(price)}
            </Price>
            <PriceSubMessage>원 / 1박</PriceSubMessage>
          </PriceMessage>
        </Column>
      </RoomWrapper>
      <Reserve
        onClick={() => {
          alert('예약이 완료되었습니다');
          history.push('/reservation/1');
        }}
      >
        예약하기
      </Reserve>
    </Conatiner>
  );
};

export default Room;

const Reserve = styled(BasicButton)`
  justify-self: flex-end;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors['purple-100']};
  border: none;
  box-shadow: 0.3px 0.3px 0.5px -1px #e8dcfe;

  color: ${({ theme }) => theme.colors['purple-200']};
  border-radius: 5px;
`;

const PriceMessage = styled(BasicContainer)`
  margin: 0;
`;

const Conatiner = styled(BasicContainer)`
  width: 100%;
  background-color: white;
`;

const PriceSubMessage = styled.small`
  font-size: 0.7rem;
  margin-top: 0.4rem;
`;

const RoomName = styled(Title)`
  font-size: 1rem;
  font-weight: 400;
`;

const Price = styled(RoomName)`
  font-weight: 800;
`;

const Image = styled.img``;

const Column = styled(BasicContainer)`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
  padding: 1rem 0;
`;

const Wrapper = styled(BasicContainer)`
  flex-direction: column;
  align-items: flex-start;
`;

const RoomWrapper = styled(BasicContainer)`
  width: 80%;
`;
