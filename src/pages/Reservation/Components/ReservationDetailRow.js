import React from 'react';
import styled from 'styled-components';

function ReservationDetailRow({
  title,
  value,
  borderBottom,
  borderTop,
  titleColor,
  valueColor,
  fontSize,
  lineHeight,
  fontWeight,
}) {
  return (
    <Row
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      fontSize={fontSize}
    >
      <Title titleColor={titleColor}>{title}</Title>
      <Value valueColor={valueColor}>{value}</Value>
    </Row>
  );
}

export default ReservationDetailRow;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
  border-top: ${props => props.borderTop && props.borderTop};
  border-bottom: ${props => props.borderBottom && props.borderBottom};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  line-height: ${props => props.lineHeight && props.lineHeight};
`;

const Title = styled.p`
  padding: 15px 0;
  color: ${props => (props.titleColor ? props.titleColor : '#888')};
`;

const Value = styled.div`
  width: 70%;
  padding: 15 px 0;
  color: ${props => props.valueColor && props.valueColor};
  text-align: right;
`;
