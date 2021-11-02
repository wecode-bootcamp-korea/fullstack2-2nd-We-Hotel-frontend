import styled from 'styled-components';
import RadioBtn from '../../components/RadioBtn/RadioBtn';
import { BasicContainer } from '../../styles/detailStyles';

const RadioBtns = ({ option, onChange, btnNames, name }) => {
  return (
    <Conatiner onChange={onChange}>
      {btnNames.map((btnName, i) => (
        <RadioBtn key={i} name={name} btnName={btnName} option={option} />
      ))}
    </Conatiner>
  );
};

const Conatiner = styled(BasicContainer)`
  justify-self: flex-end;
  padding: 1.5rem 0 1rem 0;
`;

export default RadioBtns;
