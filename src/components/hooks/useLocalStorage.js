import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

  const [ storedValue, setStoredValue ] = useState(key, () => {

    const currentLocalValue = localStorage.getItem(key)

    return currentLocalValue ? JSON.parse(currentLocalValue) : initialValue;
  })

  const 

}