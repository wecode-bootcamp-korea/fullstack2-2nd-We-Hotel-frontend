import React, { useContext } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import styled, { ThemeContext } from 'styled-components';
import { NumberCommas } from '../../utils/pakUtils';

const CalendarPresenter = ({
  prices,
  days,
  maximumDate,
  minimumDate,
  selectedDay,
  setSelectedDay,
  onDisabledDayError,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Calendar
        prices={prices}
        calendarTodayClassName="today"
        calendarClassName="Calendar"
        maximumDate={maximumDate}
        onDisabledDayError={onDisabledDayError}
        minimumDate={minimumDate}
        colorPrimary={theme.COLORS['purple-200']}
        colorPrimaryLight={theme.COLORS['purple-100']}
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends={true}
        customDaysClassName={days}
      />
    </Container>
  );
};

export default CalendarPresenter;

const Container = styled.div`
  ${({ theme }) => theme.MIXINS.FLEX()}

  .Calendar {
    font-size: 1rem;

    .Calendar__day {
      border-radius: 0.1rem;
      padding: 1rem;
    }

    button {
      font-family: 'Noto Sans';
      font-size: 0.8em;
    }
    span {
      font-size: 0.8em;
    }

    .saturday:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
      color: ${({ theme }) => theme.COLORS['blue-100']};
    }

    .friday {
      position: relative;
      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = `${props.children.props.prices.friday * 100} %`;
          return price && NumberCommas(price);
        }}';
      }
    }

    .saturday {
      position: relative;
      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = `${props.children.props.prices.saturday * 100} %`;
          return price && NumberCommas(price);
        }}';
      }
    }

    .commonDay {
      position: relative;

      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = `${props.children.props.prices.commonDay * 100} %`;
          return price && NumberCommas(price);
        }}';
      }
    }
  }

  .today {
    border: 1px solid ${({ theme }) => theme.COLORS['gray-100']};
    border-radius: 0.2rem;
    text-decoration: none;
  }
`;
