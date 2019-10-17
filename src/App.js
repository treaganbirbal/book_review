import React, { useState } from 'react';

//main compoonent
function App() {
  // destructure  value of state, function to update state(like this.setState())
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
}

export default App;
