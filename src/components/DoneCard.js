import React from 'react';
import { useDispatch } from 'react-redux';
import { markUndone, removeTodo } from '../reducers/actions';

const DoneCard = ({ task, id }) => {
  const dispatch = useDispatch();

  const handleClickRemove = () => {
    dispatch(removeTodo(task, id));
  };

  const handleClick = () => {
    dispatch(markUndone(task, id));
  };

  return (
    <div data-testid='card' className='done-card'>
      <ul >
        <li className='done-card__title'> {task} </li>
      </ul>
      <button className="card__btn1" onClick={handleClick}>Undone</button><button className="card__removbtn" onClick={handleClickRemove}>Remove</button>

    </div>
  );
};

export default DoneCard;
