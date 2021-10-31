import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { BasicContainer } from '../../../styles/pakStyles';
import { OPTIONS } from '../constants';

const SelectBtns = ({ option, onChange }) => {
  return (
    <Conatiner onChange={onChange}>
      <input
        type="radio"
        value={OPTIONS.ONEDAY}
        id={OPTIONS.ONEDAY}
        name="price"
      />
      <Label action={option} htmlFor={OPTIONS.ONEDAY}>
        1박 평균 가격
      </Label>
      <input
        type="radio"
        value={OPTIONS.TOTAL}
        id={OPTIONS.TOTAL}
        name="price"
      />
      <Label action={option} htmlFor={OPTIONS.TOTAL}>
        총 가격
      </Label>
    </Conatiner>
  );
};

const Conatiner = styled(BasicContainer)`
  justify-self: flex-end;
  padding: 1rem 1rem;
  margin-top: 0.7rem;

  input {
    display: none;
  }

  label {
    margin: 0 5px;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

const Label = styled.label`
  color: ${({ theme, action, htmlFor }) =>
    action === htmlFor ? 'black' : theme.COLORS['gray-100']};

  &:before {
    content: '•';
    color: ${({ theme, action, htmlFor }) =>
      action === htmlFor ? theme.COLORS['red-200'] : theme.COLORS['red-100']};
  }
`;

export default SelectBtns;
