import React from 'react';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { DocumentBulletList } from '@styled-icons/fluentui-system-regular/DocumentBulletList';
import { User } from '@styled-icons/fa-regular/User';
import { ClockHistory } from '@styled-icons/bootstrap/ClockHistory';
import styled from 'styled-components';

function ShortPathList({ data, isUser, pathClickHandler }) {
  return (
    <ShortPath onClick={() => pathClickHandler(data.path)}>
      {data.path === '/reservation' && <ListIcon />}
      {data.path === '/likes' && <HeartIcon />}
      {data.path === '/mydaily' && <UserIcon />}
      {data.path === '/current' && <HistoryIcon />}
      <PathName>{data.text}</PathName>
    </ShortPath>
  );
}

export default ShortPathList;

const ShortPath = styled.li`
  display: flex;
  float: left;
  position: relative;
  width: 50%;
  height: 32px;
  margin: 5px 0px 0px;
  padding: 0px 0px 0px 25px;
  font-size: 15px;
  cursor: pointer;
`;

const PathName = styled.p`
  font-size: 15px;
  line-height: 22px;
`;

const HeartIcon = styled(Heart)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
`;

const HistoryIcon = styled(ClockHistory)`
  position: absolute;
  top: 1px;
  left: 2px;
  width: 17px;
`;

const ListIcon = styled(DocumentBulletList)`
  position: absolute;
  top: -1px;
  left: 1px;
  width: 20px;
`;

const UserIcon = styled(User)`
  position: absolute;
  top: -1px;
  left: 3px;
  width: 16px;
`;
