import { useState } from 'react';

export function ModalController(props) {
  const [y, setY] = useState(1500);
  const [second, setSecond] = useState(0.2);
  const [className, setClassName] = useState('');

  const onClick = showClass => {
    setClassName(showClass);
    setSecond(0.2);
    setY(0);
  };

  const onCancel = () => {
    setClassName('');
    setSecond(0);
    setY(1500);
  };

  return {
    className,
    onCancel,
    y,
    second,
    onClick,
    children: props?.children || null,
  };
}
