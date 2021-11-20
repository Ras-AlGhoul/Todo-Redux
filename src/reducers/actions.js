/* eslint-disable */
import * as types from './types';

let maxId = 0;

if(localStorage.todoList != undefined &&  localStorage.doneTodoList != undefined){
  console.log(JSON.parse( localStorage.getItem('todoList')));
  const maxTodoId = JSON.parse( localStorage.getItem('todoList')).reduce(function(a, b) {
    return (a.id > b.id) ? a.id : b.id;
}, 0);
  console.log(maxTodoId);
  const maxDoneId = JSON.parse( localStorage.getItem('doneTodoList')).reduce(function(a, b) {
    return (a.id > b.id) ? a.id : b.id;
}, 0);
  console.log(maxDoneId);
  maxId = Math.max(maxTodoId, maxDoneId);
}

console.log(localStorage);
let nextId = localStorage.todoList == undefined &&  localStorage.doneTodoList == undefined
? 0 : ++maxId;

export const addTodo = todo => ({ type: types.ADD_TODO, payload: {todo, id:nextId++} });
export const removeTodo = (todo, id) => ({ type: types.REMOVE_TODO, payload: {todo, id} });
export const edit = tasks => ({ type: types.EDIT_TODO, payload: tasks });
export const markDone = (todo, id) => ({ type: types.MARK_DONE, payload: {todo, id}});
export const markUndone = (todo, id) => ({ type: types.MARK_UNDONE, payload: {todo, id} });

export const setInput = input => ({ type: types.SET_INPUT, payload: input });
export const emptyInput = input => ({ type: types.EMPTY_INPUT, payload: input });

export const setToggle = toggle => ({ type: types.SET_TOGGLE, payload: toggle });
export const setCardToggle = toggle => ({ type: types.SET_CARD_TOGGLE, payload: toggle });

export const setEditInput = input => ({ type: types.SET_EDITINPUT, payload: input });
