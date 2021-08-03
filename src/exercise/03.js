// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext();
const useCount = () => {
  const value = React.useContext(CountContext);

  if (!value || !value.length) {
    throw new Error(
      'the useCount hook must be used with a CountProvider component'
    );
  }

  return value;
};

const CountProvider = (props) => {
  const [count, setCount] = React.useState(0);
  const { children } = props;

  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  );
};

function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [count, setCount] = useCount();
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
