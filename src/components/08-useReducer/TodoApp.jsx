import React, { useReducer, useEffect } from 'react'
import ListTodos from './ListTodos';
import TodoAddForm from './TodoAddForm';
import { todoReducer } from './todoReducer';


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}


const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const deleteTodo = (id) => {
    const action = {
      type: 'REMOVE_TODO',
      payload: id,
    }
    dispatch(action);
  }

  const handleClickDone = (id) => {
    const action = {
      type: 'TOGGLE_TODO',
      payload: id,
    }
    dispatch(action);
  }

  return (
    <div className="container">
      <h3>TodoApp ({todos.length})</h3>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <ListTodos todos={todos} handleClickDone={handleClickDone} deleteTodo={deleteTodo} />
        </div>

        <div className='col-5'>
          <TodoAddForm dispatch={dispatch} />
        </div>
      </div>
    </div>
  )
}

export default TodoApp;
