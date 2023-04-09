import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Section, MainTitle, ContactTitle } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <ContactTitle>Contacts list</ContactTitle>
      <Filter />
      <ContactList />
    </Section>
  );
};
export default Contacts;
