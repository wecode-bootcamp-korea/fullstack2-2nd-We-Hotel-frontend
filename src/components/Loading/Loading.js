import styled from 'styled-components';

const Loading = () => (
  <Conatiner>
    <Spin />
  </Conatiner>
);

export default Loading;

const Conatiner = styled.div`
  ${({ theme }) => theme.MIXINS.FLEX()}
  height: 100vh;
  width: 100vw;
`;

const Spin = styled.div`
  margin: 5% auto;
  height: 100px;
  width: 100px;
  border: 8px solid ${({ theme }) => theme.COLORS['red-100']};
  border-top-color: ${({ theme }) => theme.COLORS['red-200']};
  border-bottom-color: ${({ theme }) => theme.COLORS['red-200']};
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
