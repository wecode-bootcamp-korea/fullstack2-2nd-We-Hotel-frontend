import React, { useContext, useEffect, useState } from 'react';
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
        colorPrimary={theme.COLORS['red-200']}
        colorPrimaryLight={theme.COLORS['red-100']}
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
  font-size: 1rem;

  .Calendar {
    .saturday:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
      color: ${({ theme }) => theme.COLORS['blue-100']};
    }

    .friday {
      position: relative;
      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = props.children.props.prices['friday'];
          return price && NumberCommas(price);
        }}';
      }
    }

    .saturday {
      position: relative;
      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = props.children.props.prices['saturday'];
          return price && NumberCommas(price);
        }}';
      }
    }

    .commonDay {
      position: relative;

      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = props.children.props.prices['commonDay'];
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

  @media (min-width: ${({ theme }) => theme.WIDTHS.XXL}px) {
    .Calendar {
      font-size: 1.8rem !important;
    }
  }

  @media (min-width: ${({ theme }) => theme.WIDTHS.XL}px) {
    .Calendar {
      font-size: 1.6rem !important;
    }
  }

  @media (min-width: ${({ theme }) => theme.WIDTHS.L}px) {
    .Calendar {
      font-size: 1.4rem !important;
    }
  }

  @media (min-width: ${({ theme }) => theme.WIDTHS.M}px) {
    .Calendar {
      font-size: 1.2rem !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.WIDTHS.S}px) {
    .Calendar {
      font-size: 1rem !important;
    }
  }
`;
