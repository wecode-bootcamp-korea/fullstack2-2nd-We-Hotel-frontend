import { CalendarContainer } from '../../components/Calendar/CalendarContainer';
import Uprasing from '../../components/Modals/Uprasing';
import { detailModalId } from './constants';

const CalendarModal = () => {
  return (
    <Uprasing id={detailModalId}>
      <CalendarContainer priceShow={true} modalId={detailModalId} />
    </Uprasing>
  );
};

export default CalendarModal;
