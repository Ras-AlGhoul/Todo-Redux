import { combineReducers } from 'redux';
import * as types from './types';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todoList')) || [],
  doneTodos: JSON.parse(localStorage.getItem('doneTodoList')) || [],
};

const cardToggleReducer = (initState = false, action) => {
  let state = initState;
  switch (action.type) {
    case types.SET_CARD_TOGGLE:
      state = !state;
      return state;
    default:
      return state;
  }
};

const toggleReducer = (initState = false, action) => {
  let state = initState;
  switch (action.type) {
    case types.SET_TOGGLE:
      state = !state;
      return state;
    default:
      return state;
  }
};

const inputReducer = (initState = '', action) => {
  let state = initState;
  switch (action.type) {
    case types.SET_INPUT:
      state = action.payload;
      return state;
    case types.EMPTY_INPUT:
      state = action.payload;
      return state;
    default:
      return initState;
  }
};

const theEditInputReducer = (initState = { todo: '', id: 0 }, action) => {
  let state = initState;
  switch (action.type) {
    case types.SET_EDITINPUT:
      state = action.payload;
      return { ...state };
    default:
      return initState;
  }
};

const listReducer = (initState = initialState, action) => {
  const state = initState;
  switch (action.type) {
    case 'ADD_TODO':
      state.todos = [...state.todos, action.payload];
      return { ...state };
    case 'EDIT_TODO':
      state.todos = state.todos
        .map((item => (item.id === action.payload.id
          ? action.payload : item)));
      return { ...state };
    case 'REMOVE_TODO':
      state.doneTodos = state.doneTodos.filter(item => item.id !== action.payload.id);
      return { ...state };
    case 'MARK_DONE':
      state.todos = state.todos.filter(item => item.todo !== action.payload.todo);
      state.doneTodos = [...state.doneTodos, action.payload];
      return { ...state };
    case 'MARK_UNDONE': {
      const moveLeft = arr => [...arr.slice(1), arr[0]];
      state.doneTodos = state.doneTodos.filter(item => item.todo !== action.payload.todo);
      state.todos = [...state.todos, action.payload];
      moveLeft(state.doneTodos);
      return { ...state };
    }
    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  listReducer,
  inputReducer,
  toggleReducer,
  theEditInputReducer,
  cardToggleReducer,
});

export default rootReducer;
