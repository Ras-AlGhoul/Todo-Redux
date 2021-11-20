import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/App.css';
import Form from './components/Form';
import Card from './components/Card';
import DoneCard from './components/DoneCard';
import { setToggle } from './reducers/actions';

const App = () => {
  const dispatch = useDispatch();
  const listReducer = useSelector(state => state.listReducer);
  const toggleReducer = useSelector(state => state.toggleReducer);
  localStorage.setItem('todoList', JSON.stringify(listReducer.todos));
  localStorage.setItem('doneTodoList', JSON.stringify(listReducer.doneTodos));
  const todosList = JSON.parse(localStorage.getItem('todoList'));
  const doneTodoList = JSON.parse(localStorage.getItem('doneTodoList'));

  return (
    <div className='App' data-testid='app'>
      <Form />
      {todosList.sort((a, b) => b.id - a.id).map((item, index) => <Card
        key={index}
        task={item.todo}
        id = {item.id}
      />)
      }
      <button className='app__btn' onClick={() => dispatch(setToggle(true))}>Unhide/Hide done tasks</button>
      {toggleReducer && (
        doneTodoList.sort((a, b) => b.id - a.id).map((item, index) => <DoneCard
          key={index}
          task={item.todo}
          id = {item.id}
        />)
      )
      }
    </div>
  );
};

export default App;
