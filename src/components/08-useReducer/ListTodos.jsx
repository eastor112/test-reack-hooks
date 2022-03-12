import Todo from "./Todo";

const ListTodos = ({ todos, handleClickDone, deleteTodo }) => {

  return (
    <ul className='list-group list-group-flush'>
      {
        todos.map((todo, i) => (
          <Todo key={todo.id} todo={todo} i={i} handleClickDone={handleClickDone} deleteTodo={deleteTodo} />
        ))
      }
    </ul>
  )
}

export default ListTodos;
