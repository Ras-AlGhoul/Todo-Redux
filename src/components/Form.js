import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setInput, emptyInput } from '../reducers/actions';

const Form = () => {
  const dispatch = useDispatch();
  const inputReducer = useSelector(state => state.inputReducer);

  const handleChange = ({ target: { value } }) => dispatch(setInput(value));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(inputReducer));
    dispatch(emptyInput(''));
  };

  return (
    <form data-testid='form' onSubmit={handleSubmit} className='form'>
      <label className='form__label'> Title </label>
      <input
        className='form__input'
        placeholder='Add a task...'
        value={inputReducer}
        onChange={handleChange}
        type="text"
      />
      <button className="form__btn" type="submit"> Add </button>
    </form>
  );
};

export default Form;
