import { useState } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
  const storedValue = localStorage.getItem(key)
  const initial: T = storedValue ? JSON.parse(storedValue) : initialValue

  const [value, setValue] = useState<T>(initial as T)

  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue] as const
}

export default useLocalStorage
