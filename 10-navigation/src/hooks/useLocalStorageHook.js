import { useState, useEffect } from 'react';

export const useLocalStorageHook = ({
  key,
  inititialValue,
}) => {
  const [local, setLocal] = useState(
    () =>
      JSON.parse(localStorage.getItem(key)) ??
      inititialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(local));
  }, [key, local]);

  return [local, setLocal];
};
