import React, { useState } from 'react';
import Todo from './Todo.js'
import TodoForm from './TodoForm.js';

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

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todos-list'>
        <h1>Todos</h1>
        {todos.map((todo, index ) => (
          <Todo  key={index} index={index} todo={todo}/>
        ))}
      </div>
      <div className='form'>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
