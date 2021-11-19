/* eslint-disable */ 
import * as types from './types';

let nextId = 0;

export const addTodo = todo => ({ type: types.ADD_TODO, id: nextId += 1, payload: todo });
export const removeTodo = todo => ({ type: types.REMOVE_TODO, payload: todo });
export const edit = tasks => ({ type: types.EDIT_TODO, payload: tasks });
export const markDone = todo => ({ type: types.MARK_DONE, payload: todo });
export const markUndone = todo => ({ type: types.MARK_UNDONE, payload: todo });

export const setInput = input => ({ type: types.SET_INPUT, payload: input });
export const emptyInput = input => ({ type: types.EMPTY_INPUT, payload: input });

export const setToggle = toggle => ({ type: types.SET_TOGGLE, payload: toggle });
export const setCardToggle = toggle => ({ type: types.SET_CARD_TOGGLE, payload: toggle });

export const setEditInput = input => ({ type: types.SET_EDITINPUT, payload: input });
