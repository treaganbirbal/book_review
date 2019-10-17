import React, { useState } from 'react';

//main compoonent
function App() {
  // destructure  value of state, function to update state( setTodos like this.setState)
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React', 
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch', 
      isCompleted: false,
    },
    {
      text: 'Pay Bills', 
      isCompleted: false,
    },
  ])

  return (
    <div className='app'>
      <div className='todos-list'>
        <h1>Todos</h1>
        {todos.map((todo, index ) => (
          {/* <Todo /> */}
        ))}
      </div>
    </div>
  )
}

export default App;
