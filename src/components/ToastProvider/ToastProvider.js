import React from "react";
import { useEscape } from "../../hooks/useEscape";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  const value = {
    toastList,
    setToastList,
  };
  useEscape({ onEscape: () => setToastList([]) });
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
