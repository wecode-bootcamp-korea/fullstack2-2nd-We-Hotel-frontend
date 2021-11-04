import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { TABNAME } from '../Detail/constants';
import { BasicContainer } from '../../styles/detailStyles';
import RadioBtn from '../../components/RadioBtn/RadioBtn';
import { withRouter } from 'react-router';
import { NOTABROUTE } from '../../utils/constants';

const TabNavigation = ({ history }) => {
  const [tabBtns, setTabBtns] = useState(TABNAME[0].e);

  const { pathname } = history.location;

  const onChange = e => {
    setTabBtns(e.target.id);
  };

  return NOTABROUTE.every(val => !pathname.includes(val)) ? (
    <Container onChange={onChange}>
      {TABNAME.map((btnName, i) => (
        <RadioBtn key={i} name={'tabBtn'} btnName={btnName} option={tabBtns} />
      ))}
    </Container>
  ) : null;
};

export default withRouter(TabNavigation);

const Container = styled(BasicContainer)`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  place-items: center center;
  min-width: 768px;
  padding: 0.2rem 4rem;
  background-color: white;
  /* border-top: 1px solid ${({ theme }) => theme.colors['gray-100']}; */
  border-top: 1px solid rgb(231, 231, 231);
  z-index: 99911;
`;
