import { SectionContainer } from './Section/Section.styled';
import { Section, Filter, Contacts, Phonebook } from 'components';

export function App() {
  return (
    <>
      <SectionContainer>
        <Section title="Phonebook">
          <Phonebook />
        </Section>
      </SectionContainer>

      <SectionContainer>
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      </SectionContainer>
    </>
  );
}
