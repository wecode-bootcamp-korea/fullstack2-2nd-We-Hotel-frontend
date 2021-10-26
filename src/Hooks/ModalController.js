import React, { useState } from 'react';

export function ModalController(props) {
  const [y, setY] = useState(1500);
  const [second, setSecond] = useState(0.2);

  const onClick = () => {
    setSecond(0.2);
    setY(0);
  };

  const onCancel = () => {
    setSecond(0);
    setY(1500);
  };

  return { onCancel, y, second, onClick, children: props?.children || null };
}
