import React from "react";

export function useEscape({ onEscape }) {
  React.useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        onEscape();
      }
    }
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [onEscape]);
}
