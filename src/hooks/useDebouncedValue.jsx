import { useEffect, useState } from "react";

const useDebouncedValue = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    // Clear timer
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export { useDebouncedValue };

/**
 * @When key press render the component useEffect will call and it will set a timer and it will make setDebounceValue after 200ms .
 *
 * key - a
 *  - Render the component
 *  - useEffect()
 *  - start a timer => make API call/ setDebounceValue after 200ms
 *
 *
 *
 *
 * @But if the next key press before 200ms, it will destroy the previous component and clear the previous timer. Here re-render the component new useEffect will call and set a new timer.
 *
 * key - ap
 *  - destroy the component(useEffect return method)
 *  - re-render the component
 *  - useEffect()
 *  - start a timer => make API call/ setDebounceValue after 200ms
 *
 *
 *
 *
 * @If the next key press after 200ms it will make setDebounceValue and make api call.
 *
 *
 */
