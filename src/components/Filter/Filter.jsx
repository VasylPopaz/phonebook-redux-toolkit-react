import { FormInput, FormLabel } from 'components/Phonebook/Phonebook.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'state/filterSlice';

export const Filter = ({ onChange }) => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <FormLabel>
      Find contacts by name
      <FormInput type="text" onChange={handleChangeFilter} />
    </FormLabel>
  );
};
