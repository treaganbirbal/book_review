import React from 'react';


function App() {
  // eslint-disable-next-line no-undef
  const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <p>Book ID is {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
        </button>

    </div>
  );
}

export default App;
