// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state = {}, newState) => {
  const { type, payload } = newState;

  switch (type) {
    default:
    case 'INCREMENT':
      return {
        count: state.count + payload,
      };
  }
};

function Counter({initialCount = 0, step = 1}) {
  const [countState, setCountState] = React.useReducer(
    countReducer,
    { count: initialCount }
  );
  const { count } = countState;
  const increment = () => (
    setCountState({ type: 'INCREMENT', payload: step })
  );

  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />
}

export default App
