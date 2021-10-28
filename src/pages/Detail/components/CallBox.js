import styled from 'styled-components';

const CallBox = ({ onClick, bgColor, color, text }) => {
  return (
    <Container onClick={onClick} color={color} bgColor={bgColor}>
      {text}
    </Container>
  );
};

export default CallBox;

const Container = styled.div`
  width: 100%;
  padding: 1rem;

  background-color: ${({ theme, bgColor }) =>
    bgColor || theme.COLORS['purple-100']};

  color: ${({ theme, color }) => color || theme.COLORS['purple-200']};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  word-spacing: 2px;
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    opacity: 0.9;
    border: 1px solid ${({ theme }) => theme.COLORS['purple-100']};
  }

  &:active {
    opacity: 0.7;
  }
`;
