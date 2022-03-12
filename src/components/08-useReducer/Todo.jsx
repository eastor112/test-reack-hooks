const Todo = ({ todo, i, handleClickDone, deleteTodo }) => {

  return (
    <li className='list-group-item' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <p
        style={{ margin: '0px', cursor: 'pointer', textDecoration: todo.done ? 'line-through' : 'none' }}
        onClick={() => handleClickDone(todo.id)}
      >
        {i + 1}-{todo.description}
      </p>
      <button className='btn btn-outline-danger' onClick={() => deleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  )
}

export default Todo;
