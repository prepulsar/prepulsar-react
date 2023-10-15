# `state` Function Documentation

## Overview

The `state` function is a utility for managing reactive state in a React component. It combines the power of the `prepulsar` library for reactive state management with React's `useState` and `useEffect` hooks. This function is designed to simplify state management by providing a convenient way to create and manage reactive state within a React component.

## Parameters

- `initialValue` (required): 
  The initial value of the reactive state.

- `options` (optional): 
  An object containing configuration options for the reactive state.

- `options.middleware?: (oldValue: T, newValue: T) => T` 
  (optional): A function that will be called whenever the reactive state is updated with the old value and the new value of the reactive state. This function can be used to perform side effects whenever the reactive state is updated. 

  The returned value will be the new state.

  ```javascript
  const useCounter = state(0, {
    middleware: (oldValue, newValue) => {
      // do something else
      doSomethingElse(oldValue, newValue);
      
      // we always return the value + 2
      return newValue + 2;
    },
  });
  ```

- `options.shouldChange?: (oldValue: T, newValue: T) => boolean` (optional)
  A function that will be called whenever the reactive state is updated with the old value and the new value of the reactive state. This function can be used to determine whether or not the reactive state should be updated. If this function returns `false`, the reactive state will not be updated.

  This function runs after the `middleware` function.

  ```javascript
  const useCounter = state(0, {
    shouldChange: (oldValue, newValue) => {
      // update the state only if the new value is greater than 10
      return newValue < 10;
    },
  });
  ```

## Return Value

The `state` function returns a custom hook. The hook returns a proxy object which has a `value` property holding the state's value.

## Example Usage

```jsx
import React from "react";
import { state } from "prepulsar-react";

const useCounter = state(0);

const Counter = () => {
  const counter = useCounter();

  return (
    <div>
      <p>Current Value: {counter.value}</p>
      <button onClick={() => counter.value += 1}>Increment</button>
    </div>
  );
}
