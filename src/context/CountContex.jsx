import { createContext, useContext, useReducer } from "react";

const CountContext = createContext();
const CountDispatchContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(dipacthCount, initialCount);

  return (
    <CountContext.Provider value={count}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountContext.Provider>
  );
};

export const useCount = () => {
  return useContext(CountContext);
};

export const useDispatchCount = () => {
  return useContext(CountDispatchContext);
};

const dipacthCount = (state, action) => {
  switch (action.type) {
    case "add_number": {
      return { ...state, number: state.number + 1 };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialCount = {
  number: 1,
};
