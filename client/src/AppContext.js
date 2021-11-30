import React, { createContext, useReducer } from "react";

const initialContext = {
  paused: false,
  setPaused: () => {},
  isOwner: false,
  setIsOwner: () => {},
  isWalletConnectionModalOpen: false,
  setWalletConnectModal: () => {},
  txnStatus: "NOT_SUBMITTED",
  setTxnStatus: () => {},
};

const appReducer = (state, { type, payload }) => {
  console.log("Updating...", type, payload);
  switch (type) {
    case "SET_PAUSED":
      return {
        ...state,
        paused: payload,
      };
    case "SET_IS_OWNER":
      return {
        ...state,
        isOwner: payload,
      };
    case "SET_WALLET_MODAL":
      return {
        ...state,
        isWalletConnectModalOpen: payload,
      };
    case "SET_TXN_STATUS":
      return {
        ...state,
        txnStatus: payload,
      };
    default:
      return state;
  }
};

const AppContext = createContext(initialContext);
export const useAppContext = () => React.useContext(AppContext);
export const AppContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialContext);

  const contextValue = {
    paused: store.paused,
    setPaused: (pause) => {
      dispatch({ type: "SET_PAUSED", payload: pause });
    },
    isOwner: store.isOwner,
    setIsOwner: (owns) => {
      dispatch({ type: "SET_IS_OWNER", payload: owns });
    },
    isWalletConnectModalOpen: store.isWalletConnectModalOpen,
    setWalletConnectModal: (open) => {
      dispatch({ type: "SET_WALLET_MODAL", payload: open });
    },
    txnStatus: store.txnStatus,
    setTxnStatus: (status) => {
      dispatch({ type: "SET_TXN_STATUS", payload: status });
    },
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};