import { useState } from "react";

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);

    // Though it doesn’t matter in most cases, a slightly more accurate implementation looks like this:

    //   function dispatch(action) {
    //       setState((s) => reducer(s, action));
    //   }

    // This is because the dispatched actions are queued until the next render, similar to the updater functions.
  }

  return [state, dispatch];
}
