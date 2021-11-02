import styled from 'styled-components';
import { MainHeader, Message, Title } from '../../styles/detailStyles';
import CallBox from './components/CallBox';
import { aGettDistance, getMonthDay } from './utils';

const DetailSectionA = ({ fromDate, toDate, onClick }) => {
  return (
    <SectionA>
      <MainTitle>
        객실 선택 <Message>(세금/봉사료 포함)</Message>
      </MainTitle>
      <CallBox
        onClick={onClick}
        text={
          toDate &&
          `${getMonthDay(fromDate)} - ${
            toDate && getMonthDay(toDate)
          } •${aGettDistance({ from: fromDate, to: toDate })}박`
        }
      />
    </SectionA>
  );
};

export default DetailSectionA;

const MainTitle = styled(Title)`
  font-size: 1.3rem;
`;

const SectionA = styled(MainHeader)`
  background-color: white;
`;
