import React, { useState } from 'react';

function TodoForm ({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" onChange={e => setValue(e.target.value)}/>

        </form>
    )
}

export default TodoForm