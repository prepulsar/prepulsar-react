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

The `state` function returns a function that should be called within a React component. This inner function returns a proxy object that represents the reactive state. Additionally, it sets up the necessary hooks for integrating this state into your component.

## Example Usage

Here's an example of how to use the `state` function within a React component:

```jsx
import React from "react";
import { state } from "./state"; // Import the state function

function MyComponent() {
  // Create a reactive state with an initial value of 0
  const reactiveState = state(0);

  // Access the reactive state like a regular variable
  const currentValue = reactiveState();

  return (
    <div>
      <p>Current Value: {currentValue}</p>
      <button onClick={() => reactiveState(currentValue + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;