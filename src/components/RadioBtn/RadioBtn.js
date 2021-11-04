import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const RadoBtn = ({ name, btnName, option }) => {
  const history = useHistory();

  return (
    <>
      <Input type="radio" value={btnName.e} id={btnName.e} name={name} />
      <Label
        name={name}
        onClick={() => history.push(btnName.a)}
        action={option}
        htmlFor={btnName.e}
      >
        {btnName.i || ''}
        {name === 'tabBtn' && <br />}
        {btnName.k}
      </Label>
    </>
  );
};

export default RadoBtn;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  margin: 0 10px;
  text-align: center;
  font-size: 10px;
  cursor: pointer;
  color: ${({ theme, action, htmlFor }) =>
    action === htmlFor ? theme.colors['purple-200'] : 'rgb(146, 146, 146)'};
  /* action === htmlFor ? 'rgb(146, 146, 146)' : theme.colors['gray-100']}; */

  &:before {
    content: '${({ name }) => (name === 'option' ? ' • ' : '')}';
  }

  &:before,
  svg {
    width: 25px;
    margin-bottom: 5px;
    color: ${({ theme, action, htmlFor }) => {
      return action === htmlFor
        ? theme.colors['purple-200']
        : 'rgb(146, 146, 146)';
      // return action === htmlFor
      // ? theme.colors['purple-200']
      // : theme.colors['purple-100'];
    }};
  }
`;
