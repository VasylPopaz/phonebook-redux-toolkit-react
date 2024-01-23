import { ADD_CONTACT, CHANGE_FILTER, DELETE_CONTACT } from './constants';

export const addContact = todo => {
  return { type: ADD_CONTACT, payload: todo };
};
export const deleteContact = id => {
  return { type: DELETE_CONTACT, payload: id };
};
export const changeFilter = filterValue => {
  return { type: CHANGE_FILTER, payload: filterValue };
};
