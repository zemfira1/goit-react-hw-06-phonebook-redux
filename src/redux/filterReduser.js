import { initialState } from './constants';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/toFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
