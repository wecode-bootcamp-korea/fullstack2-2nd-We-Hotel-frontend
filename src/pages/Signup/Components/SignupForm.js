import React from 'react';
import styled from 'styled-components';

function SignupForm({ title, type, value, description, onChange, name }) {
  return (
    <form>
      <FormTitle>{title}</FormTitle>
      <InputWrapper>
        <Input
          placeholder="필수입력(예약시 사용)"
          title={title}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
        />
      </InputWrapper>
      <InputDescription>{description}</InputDescription>
    </form>
  );
}

export default SignupForm;

const FormTitle = styled.p`
  margin: 20px 0 0;
  color: rgb(77, 77, 77);
  line-height: 1.4em;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7em 0;
  border: 0;
  border-bottom: 1px solid #dcdcdd;
  color: #4d4d4d;
  background: #fff;
  outline: none;
  text-align: left;
  font-size: 1em;
  line-height: 1.2em;
`;

const InputDescription = styled.div`
  height: 15px;
  padding: 7px 0px;
  color: #6e2c9b;
  font-size: 11px;
`;
