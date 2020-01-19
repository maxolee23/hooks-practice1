import React, { useState } from 'react';
import './App.css';

function Todo ({todo, index, completeTodo, delTodo}) {
  return(
    <div style={{textDecoration: todo.isCompleted? 'line-through' : ''}} className='todo'>
      { todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

function TodoForm ({addTodo}) {
  const [value,setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder='Add Todos to list' onChange={e => setValue(e.target.value)}/>
    </form>
  )

}


function App () {

  const [todos, setTodos] = useState([
    {
      text: 'Learn about hooks',
      isCompleted: false 
    },
    {
      text: 'Learn more NodeJS',
      isCompleted: false
    },
    {
      text: 'Play ping pong',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const delTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


  return (
    <div className='app'>
      <h1>Welcome to React hooks</h1>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} delTodo={delTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App