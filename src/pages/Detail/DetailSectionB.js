import styled from 'styled-components';
import { MainHeader } from '../../styles/pakStyles';
import Room from './components/Room';
import SelectBtns from './components/SelectBtns';
import { getDistanceDate } from './utils';

const DetailSectionB = ({
  hotelInfo,
  calPrices,
  onChange,
  getDateForm,
  option,
}) => {
  return (
    <SectionB>
      {getDistanceDate(getDateForm) > 1 && (
        <SelectBtns option={option} onChange={onChange} />
      )}
      {hotelInfo[0].rooms.map(item => (
        <Room calPrices={calPrices} key={item.id} item={item} />
      ))}
    </SectionB>
  );
};

export default DetailSectionB;

const SectionB = styled(MainHeader)`
  display: grid;
  grid-gap: 0.7rem;
  grid-template-rows: repeat(auto, 1fr);
  justify-content: stretch;
  padding: 0;
  background-color: ${({ theme }) => theme.colors['gray-50']};
`;
