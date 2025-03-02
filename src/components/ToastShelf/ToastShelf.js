import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastList, setToastList } = React.useContext(ToastContext);

  function removeToast(id) {
    setToastList((toastList) => toastList.filter((toast) => toast.id !== id));
  }

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map(({ id, variant, children }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} variant={variant} onClose={removeToast}>
              {children}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
