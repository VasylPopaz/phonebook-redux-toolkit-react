import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'state/selectors';
import { addContact, deleteContact } from 'state/contactSlice';
import { changeFilter } from 'state/filterSlice';
import { SectionContainer } from './Section/Section.styled';
import { Section, Filter, Contacts, Phonebook } from 'components';

export function App() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFormSubmit = data => {
    !contacts.find(elem => elem.name.toLowerCase() === data.name.toLowerCase())
      ? dispatch(addContact(data))
      : alert(`${data.name} is already in contacts!`);
  };

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <SectionContainer>
        <Section title="Phonebook">
          <Phonebook onSubmit={handleFormSubmit} />
        </Section>
      </SectionContainer>

      <SectionContainer>
        <Section title="Contacts">
          <Filter onChange={handleChangeFilter} />
          <Contacts contacts={filteredContacts} onClick={handleDeleteContact} />
        </Section>
      </SectionContainer>
    </div>
  );
}