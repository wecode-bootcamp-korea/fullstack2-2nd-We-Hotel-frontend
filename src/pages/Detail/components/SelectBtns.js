import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { BasicContainer } from '../../../styles/pakStyles';

const SelectBtns = () => {
  const [id, setId] = useState('oneDay');

  const onChange = e => {
    setId(e.target.id);
  };

  return (
    <Conatiner onChange={onChange}>
      <input type="radio" value="oneDay" id="oneDay" name="price" />
      <Label action={id} htmlFor="oneDay">
        1박 가격
      </Label>
      <input type="radio" value="total" id="total" name="price" />
      <Label action={id} htmlFor="total">
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
