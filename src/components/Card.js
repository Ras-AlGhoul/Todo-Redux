import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  markDone,
  edit,
  setEditInput,
} from '../reducers/actions';

const Card = ({ task }) => {
  const dispatch = useDispatch();
  const editInputReducer = useSelector(state => state.theEditInputReducer);
  const [toggle, setToggle] = useState(false);

  const handleClickDone = () => {
    dispatch(markDone(task));
  };
  const handleEdit = e => {
    e.preventDefault();
    dispatch(edit(editInputReducer));
    setToggle(false);
    dispatch(setEditInput({ todo: '', previousTask: '' }));
  };

  return (
    <ul data-testid='card' className='card'>
      {!toggle && (
        <li className="done-card__title"> {task} </li>
      )}
      {toggle && (
        <form onSubmit={handleEdit}>
          <input className='card__input' value={editInputReducer.todo} onChange={({ target: { value } }) => dispatch(setEditInput({ todo: value, previousTask: task }))} />
          <button className='card__btn' type='submit'>Cofirm</button>
        </form>
      )}
      <button className="card__btn1" onClick={handleClickDone}>Done</button> <button className="card__btn2" onClick={() => setToggle(true)}> Edit </button>
    </ul>
  );
};

export default Card;
