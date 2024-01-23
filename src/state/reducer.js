import { loadDataFromLS } from 'helpers/storage';
import { ADD_CONTACT, CHANGE_FILTER, DELETE_CONTACT } from './constants';

const initialState = {
  contacts: loadDataFromLS('contacts'),
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case CHANGE_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
