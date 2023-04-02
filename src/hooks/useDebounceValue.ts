import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

export const useDebouncedValue = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const debouncedSetter = debounce(
      (newValue: T) => setDebouncedValue(newValue),
      delay
    )
    debouncedSetter(value)

    return () => {
      debouncedSetter.cancel()
    }
  }, [value, delay])

  return debouncedValue
}
