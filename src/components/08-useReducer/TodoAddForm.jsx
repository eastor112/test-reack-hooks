import useForm from "../../hooks/useForm";

const TodoAddForm = ({ dispatch }) => {
  const { formValues, handleChange, reset } = useForm({ description: '' });

  const { description } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length === 0) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    const action = {
      type: 'ADD_TODO',
      payload: newTodo,
    }

    dispatch(action);
    reset();
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-control'
          placeholder='Make a small project..'
          autoComplete='off'
          name='description'
          value={description}
          onChange={handleChange}
        />
        <button className='btn btn-outline-primary mt-1 btn-block w-full'>
          Agregar +
        </button>
      </form>
    </>
  )
}

export default TodoAddForm;
