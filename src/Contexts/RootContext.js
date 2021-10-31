import { createContext, useReducer } from 'react';
import { useContext } from 'react/cjs/react.development';
import { rootReducer } from './rootReducer';

const RootContextInstance = createContext();

const RootContext = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {});

  return (
    <RootContextInstance.Provider value={{ state, dispatch }}>
      {children}
    </RootContextInstance.Provider>
  );
};

export default RootContext;

export const useDispatch = () => {
  const { state, dispatch } = useContext(RootContextInstance);
  return [state, dispatch];
};
