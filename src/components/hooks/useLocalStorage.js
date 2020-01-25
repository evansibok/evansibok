import { useState } from "react"

export const useLocalStorage = (key, initialValue = "") => {

	const [storedValue, setStoredValue] = useState(() => {

		if (typeof window !== `undefined`) {
			try {
				const currentLocalValue = window.localStorage.getItem(key)

				return currentLocalValue ? JSON.parse(currentLocalValue) : initialValue
			} catch (error) {
				console.log(error);
				return initialValue;
			}
		}
	})

	const setValue = value => {
		if (typeof window !== `undefined`) {
			try {
				setStoredValue(value)
				window.localStorage.setItem(key, JSON.stringify(value))
			} catch (error) {
				console.log(error)
			}
		}
	}

	return [storedValue, setValue]
}