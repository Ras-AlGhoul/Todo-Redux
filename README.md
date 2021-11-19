# Building a To Do list with React and Redux

Your task is to create a simple to do list app written in React with Redux as a state store.

You can structure your app however you like but it should include all the basic requirements below.

At the moment, we have set this app for you with basic scripts, Redux and Redux dev tools.


# Installation :wrench:

Create your react app using `create-react-app`


# Basic requirements of the app :memo:

- Add a new todo to your todo-list
- Edit a todo
- Remove a todo from the list
- Each todo card must be toggleable between 'done' and 'not done'
- There must be a remove-button on cards that are 'done' and when the user clicks the button it will be removed from the list completely
- Todo cards which are set to 'done' must appear on the bottom of the list, and they should be easy to visually separate
- The original order of the cards must be maintained if you toggle a card to 'done' and then back again.
- It should be easy to add, toggle and remove todo's. For example adding a new card by hitting 'enter'
- You must be able to hide all 'done' todo cards

# Optional features:

- Set a due date for a todo
- Create todo categories

# Technical Requirements

- You _MUST_ use Redux as your state container and make sure your state persists in localstorage (list is unchanged on refreshes)
- The application should work in chrome, safari and firefox
- You should have tests for the components
- You should have tests for the actions
- You should have tests for the reducers

# FAQ

- Do you have an example how to test Redux state?
  > You need to do Vanilla JS style and cannot use hooks. Here is an example on how to access the state.

```
import store from './store.js';

describe('Redux store', () => {
  it('gets todos', () => {
    const todos = store.getState().todos;
    expect(todos).toEqual([]);
  });
});
```
