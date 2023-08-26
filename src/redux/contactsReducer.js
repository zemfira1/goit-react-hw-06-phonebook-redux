import { initialState } from './constants';

export const contactsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contactsList/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case 'contactsList/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
