import React, { useContext } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import styled, { ThemeContext } from 'styled-components';
import { NumberCommas } from '../../utils/pakUtils';
import {
  BasicContainer,
  Message,
  MoreBtn,
  Title,
} from '../../styles/pakStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { aGettDistance, getMonthDay } from '../../pages/Detail/utils';

const CalendarPresenter = ({
  onCancel,
  prices,
  days,
  maximumDate,
  minimumDate,
  selectedDay,
  setSelectedDay,
  onDisabledDayError,
  fromDate,
  toDate,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <BackButton onClick={onCancel}>✕</BackButton>
      <Header>
        {fromDate && (
          <HeadColumn>
            <DateTitle>체크인</DateTitle>
            <DateValue>{getMonthDay(fromDate)}</DateValue>
          </HeadColumn>
        )}

        {toDate && (
          <HeadColumn>
            <Arrow>
              <FontAwesomeIcon icon={faArrowRight} />
            </Arrow>
          </HeadColumn>
        )}

        {toDate && (
          <HeadColumn>
            <DateTitle className="rightAligh">체크아웃</DateTitle>
            <DateValue className="rightAligh">{getMonthDay(toDate)}</DateValue>
          </HeadColumn>
        )}
      </Header>
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
      <CalendarBtn toDate={toDate} onClick={() => onCancel()}>
        {toDate
          ? `${aGettDistance({ from: fromDate, to: toDate })}박 선택완료`
          : '체크아웃 날짜를 선택해주세요'}
      </CalendarBtn>
    </Wrapper>
  );
};

export default CalendarPresenter;

const Arrow = styled.span``;

const CalendarBtn = styled(MoreBtn)`
  z-index: 101;
  position: absolute;
  bottom: 0;
  left: 50%;
  max-width: 230px;
  transform: translateX(-50%);

  background-color: ${({ theme, toDate }) =>
    toDate ? theme.COLORS['purple-200'] : theme.COLORS['gray-50']};
  border-color: ${({ theme, toDate }) =>
    toDate ? theme.COLORS['purple-200'] : theme.COLORS['gray-50']};
  color: ${({ theme, toDate }) =>
    toDate ? 'white' : theme.COLORS['gray-200']};
  pointer-events: ${({ toDate }) => toDate || 'none'};
`;

const Header = styled(BasicContainer)`
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const HeadColumn = styled(BasicContainer)`
  flex-direction: column;

  .rightAligh {
    text-align: right;
  }
`;

const DateValue = styled(Title)``;

const DateTitle = styled(Message)``;

const Wrapper = styled.div`
  position: relative;
  width: min-content;
  margin: 0 auto;
`;

const BackButton = styled.button`
  margin: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 100;

  :active {
    opacity: 0.6;
  }
`;

const Container = styled.div`
  .Calendar {
    font-size: 1rem;
    border: 1px solid lightgray;
    border-bottom-style: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: none;
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

    .blue:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
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
