import { CalendarContainer } from '../../components/Calendar/CalendarContainer';
import Uprasing from '../../components/Modals/Uprasing';
import { detailModalId2 } from './constants';

const CalendarModal = () => {
  return (
    <Uprasing id={detailModalId2}>
      <CalendarContainer priceShow={true} modalId={detailModalId2} />
    </Uprasing>
  );
};

export default CalendarModal;
