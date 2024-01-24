import React from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsDescr,
  ContactsItem,
  ContactsList,
  DeleteButton,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'state/selectors';
import { deleteContact } from 'state/contactSlice';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ContactsList>
      {filteredContacts.map(elem => {
        return (
          <ContactsItem key={nanoid()}>
            <ContactsDescr>
              {elem.name}: {elem.number}
            </ContactsDescr>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(elem.id))}
            >
              Delete
            </DeleteButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};
