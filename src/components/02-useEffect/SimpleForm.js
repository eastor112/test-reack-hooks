import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('Hola Effect');
  }, [])

  useEffect(() => {
    console.log('Hola form');
  }, [formState])

  useEffect(() => {
    console.log('Hola email');
  }, [email])


  const handleChange = ({ target }) => {

    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div>
        <input
          type="text"
          name='name'
          autoComplete='off'
          placeholder='Tu nombre'
          value={name}
          onChange={handleChange}
        />

        <input
          type="text"
          name='email'
          autoComplete='off'
          placeholder='Tu email'
          value={email}
          onChange={handleChange}
        />
      </div>
      { (name === '123') && <Message />}
    </>
  )
}

export default SimpleForm
