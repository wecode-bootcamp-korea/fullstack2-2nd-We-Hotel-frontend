import styled from 'styled-components';

const Border = ({ height = 1, margin = 1, color }) => {
  return <Container color={color} height={height} margin={margin}></Container>;
};

export default Border;

const Container = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => margin}px 0;
  background-color: ${({ theme, color }) => color || theme.colors['gray-100']};
`;
