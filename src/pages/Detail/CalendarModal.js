import { CalendarContainer } from '../../components/Calendar/CalendarContainer';
import Uprasing from '../../components/Modals/Uprasing';

const CalendarModal = () => {
  return (
    <Uprasing>
      <CalendarContainer priceShow={true} />
    </Uprasing>
  );
};

export default CalendarModal;
