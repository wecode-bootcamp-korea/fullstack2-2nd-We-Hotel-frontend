import { createContext, useReducer } from 'react';
import { useContext } from 'react/cjs/react.development';
import { modalReducer } from './ModalReducer';

const ModalContextInstance = createContext();

const ModalContext = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    modal_1: { isShow: false, y: 1500, second: 0.2, backBtnShow: true },
    modal_2: { isShow: false, y: 1500, second: 0.2, backBtnShow: true },
    modal_3: { isShow: false, y: 1500, second: 0.2, backBtnShow: true },
    modal_4: { isShow: false, y: 300, second: 3, backBtnShow: false },
    modal_10: { isShow: false, y: 1500, second: 0.2, backBtnShow: false },
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
