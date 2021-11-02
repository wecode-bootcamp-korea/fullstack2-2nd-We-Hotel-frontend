import React, { useContext } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import styled, { ThemeContext } from 'styled-components';
import { NumberCommas } from '../../utils/commonUtils';
import {
  BasicContainer,
  Message,
  MoreBtn,
  Title,
} from '../../styles/detailStyles';
import { aGettDistance, getMonthDay } from '../../pages/Detail/utils';

const CalendarPresenter = ({
  onCancel,
  prices,
  days,
  maximumDate,
  minimumDate,
  fromDate,
  toDate,
  selectedDay,
  setSelectedDay,
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

        <HeadColumn className="centerColumn">
          <Arrow className="centerAlign">
            <img
              alt={'arrow'}
              src="https://cdn.dailyhotel.com/ux/ic-calendar-arrow.svg"
            />
          </Arrow>
        </HeadColumn>

        <HeadColumn>
          <DateTitle className="rightAlign">체크아웃</DateTitle>

          {toDate && (
            <DateValue className="rightAlign"> {getMonthDay(toDate)}</DateValue>
          )}
        </HeadColumn>
      </Header>
      <Container>
        <Calendar
          prices={prices}
          calendarTodayClassName="today"
          calendarClassName="Calendar"
          maximumDate={maximumDate}
          onDisabledDayError={() => alert('선택 할 수 없는 날짜입니다.')}
          minimumDate={minimumDate}
          colorPrimary={theme.colors['purple-200']}
          colorPrimaryLight={theme.colors['purple-100']}
          shouldHighlightWeekends={true}
          customDaysClassName={days}
          value={selectedDay}
          onChange={setSelectedDay}
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

const Arrow = styled.span`
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors['gray-100']};
`;

const CalendarBtn = styled(MoreBtn)`
  z-index: 101;
  position: absolute;
  bottom: 0;
  left: 50%;
  max-width: 230px;
  transform: translateX(-50%);

  background-color: ${({ theme, toDate }) =>
    toDate ? theme.colors['purple-200'] : theme.colors['gray-50']};
  border-color: ${({ theme, toDate }) =>
    toDate ? theme.colors['purple-200'] : theme.colors['gray-50']};
  color: ${({ theme, toDate }) =>
    toDate ? 'white' : theme.colors['gray-200']};
  pointer-events: ${({ toDate }) => toDate || 'none'};
`;

const Header = styled(BasicContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-100']};
  padding: 0.5rem;
`;

const HeadColumn = styled(BasicContainer)`
  flex-direction: column;

  &.centerColumn {
    justify-content: flex-end;
  }

  .rightAlign {
    text-align: right;
  }

  .centerAlign {
    display: flex;
    justify-content: center;
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
    margin-top: -1rem;
    font-size: 1rem;
    border-radius: 0.1rem;
    background-color: transparent;
    box-shadow: none;
    .Calendar__day {
      border-radius: 0.1rem;
    }

    button {
      font-family: 'Noto Sans';
      font-size: 0.8em;
    }
    span {
      font-size: 0.8em;
    }

    .blue:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
      color: ${({ theme }) => theme.colors['blue-100']};
    }

    .friday {
      position: relative;
      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = `${props.children.props.prices?.friday * 100} %`;
          return price && NumberCommas(price);
        }}';
      }
    }

    .saturday {
      position: relative;
      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = `${props.children.props.prices?.saturday * 100} %`;
          return price && NumberCommas(price);
        }}';
      }
    }

    .commonDay {
      position: relative;

      &:after {
        ${({ theme }) => theme.MIXINS.MEMO};
        content: '${props => {
          const price = `${props.children.props.prices?.commonDay * 100} %`;
          return price && NumberCommas(price);
        }}';
      }
    }
  }

  .today {
    border: 1px solid ${({ theme }) => theme.colors['gray-100']};
    border-radius: 0.2rem;
    text-decoration: none;
  }
`;
