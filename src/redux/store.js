import { combineReducers, createStore } from 'redux';
import { contactsListReducer } from './contactsReducer';
import { filterReducer } from './filterReduser';

const rootReducer = combineReducers({
  contactsList: contactsListReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer);
