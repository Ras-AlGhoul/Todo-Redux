import * as types from './types';

let maxId = 0;

if (localStorage.todoList !== undefined && localStorage.doneTodoList !== undefined) {
  const maxTodoId = JSON.parse(localStorage.getItem('todoList')).reduce((previousTodo, currentTodo) => (previousTodo.id > currentTodo.id ? previousTodo.id : currentTodo.id), 0);
  const maxDoneId = JSON.parse(localStorage.getItem('doneTodoList')).reduce((previousTodo, currentTodo) => (previousTodo.id > currentTodo.id ? previousTodo.id : currentTodo.id), 0);
  maxId = Math.max(maxTodoId, maxDoneId);
}

let nextId = localStorage.todoList === undefined && localStorage.doneTodoList === undefined
  ? 0 : ++maxId;

export const addTodo = todo => ({ type: types.ADD_TODO, payload: { todo, id: nextId++ } });
export const removeTodo = (todo, id) => ({ type: types.REMOVE_TODO, payload: { todo, id } });
export const edit = tasks => ({ type: types.EDIT_TODO, payload: tasks });
export const markDone = (todo, id) => ({ type: types.MARK_DONE, payload: { todo, id } });
export const markUndone = (todo, id) => ({ type: types.MARK_UNDONE, payload: { todo, id } });

export const setInput = input => ({ type: types.SET_INPUT, payload: input });
export const emptyInput = input => ({ type: types.EMPTY_INPUT, payload: input });

export const setToggle = toggle => ({ type: types.SET_TOGGLE, payload: toggle });
export const setCardToggle = toggle => ({ type: types.SET_CARD_TOGGLE, payload: toggle });

export const setEditInput = input => ({ type: types.SET_EDITINPUT, payload: input });
