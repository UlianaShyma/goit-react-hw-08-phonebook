import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Button } from './ContactForm.styled';
import { ReactComponent as AddContactIcon } from '../../icons/addUser.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContactsItem } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItem);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    updateContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const updateContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isExist
      ? toast.error(`Contact with name ${name} is already exists`)
      : dispatch(addContact(newContact));
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Contact name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Phone number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">
        Add contact
        <AddContactIcon width="27" height="27" />
      </Button>
    </Form>
  );
};
