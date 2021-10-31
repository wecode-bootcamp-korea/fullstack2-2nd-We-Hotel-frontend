import { createContext, useReducer } from 'react';
import { useContext } from 'react/cjs/react.development';
import { modalReducer } from './ModalReducer';

const ModalContextInstance = createContext();

const ModalContext = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    y: 1500,
    second: 0.2,
    className: '',
    backBtnShow: true,
  });

  return (
    <ModalContextInstance.Provider value={{ state, dispatch }}>
      {children}
    </ModalContextInstance.Provider>
  );
};

export default ModalContext;

export const useModalDispatch = () => {
  const { state, dispatch } = useContext(ModalContextInstance);
  return [state, dispatch];
};
