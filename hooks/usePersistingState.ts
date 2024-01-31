import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function usePersistingState<P = undefined>(key: string, initialState?: P): [P, Dispatch<SetStateAction<P>>];

export function usePersistingState<P = undefined>(
  key: string, initialState?: P | undefined
): [P | undefined, Dispatch<SetStateAction<P | undefined>>] {
  // BUG: calling localStorage causes internal server error 500
  function initializeState() {
    const oldState = localStorage.getItem(key);
    if (oldState !== null) return JSON.parse(oldState);
    return initialState;
  };

  // new persisted state
  const [value, setValue] = useState<P | undefined>(initializeState);

  // update persisted state
  useEffect(() => {
    function updateState(event: StorageEvent) {
      if (event.key !== key) return;
      if (!event.newValue) return;
      if (event.newValue === event.oldValue) return;

      const newValue = JSON.parse(event.newValue);
      setValue(newValue);
    };

    window.addEventListener("storage", updateState);

    return () => window.removeEventListener("storage", updateState);
  }, [key]);

  // update local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};