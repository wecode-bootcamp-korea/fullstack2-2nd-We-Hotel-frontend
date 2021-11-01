import styled from 'styled-components';
import { Title } from '../../styles/pakStyles';

const Loading = () => (
  <Conatiner>
    <LoadingMessage>LOADING...</LoadingMessage>
    <Spin />
  </Conatiner>
);

export default Loading;

const LoadingMessage = styled(Title)`
  color: ${({ theme }) => theme.colors['purple-200']};
  font-size: 1.1rem;
`;

const Conatiner = styled.div`
  ${({ theme }) => theme.MIXINS.FLEX({ direction: 'column' })}
  height: 100vh;
  width: 100vw;
`;

const Spin = styled.div`
  margin: 5% auto;
  height: 100px;
  width: 100px;
  border: 8px solid ${({ theme }) => theme.colors['purple-100']};
  border-top-color: ${({ theme }) => theme.colors['purple-200']};
  border-bottom-color: ${({ theme }) => theme.colors['purple-200']};
  border-radius: 100%;
  animation: spin 800ms infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
