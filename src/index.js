import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PlayersList';
import AddPersonForm from './components/AddPlayersForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const initialState = {
  contacts: ["Lionel Messi", "Cristiano Ronaldo"]
};

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PLAYER':
      return { ...state, 
        contacts: [ ...state.contacts, action.data]};
    case 'DELETE_PLAYER':
      return { ...state,
        contacts: [ ...state.contacts, action.data]};
    default:
      return state;
  }
}

// Store to components
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);






