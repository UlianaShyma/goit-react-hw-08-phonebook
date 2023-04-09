import { useDispatch, useSelector } from 'react-redux';
import { List, Item, StyledDeleteOutlineIcon } from './ContactList.styled';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import {
  selectContactsError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import PersonIcon from '@mui/icons-material/Person';

export const ContactList = () => {
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {error && <b>Sorry, something went wrong</b>}
      {!error && (
        <List>
          {filteredContacts?.map(({ id, name, number }) => (
            <Item key={id}>
              <div>
                <PersonIcon sx={{ fontSize: '32px', marginRight: '8px' }} />
                {name}: {number}
              </div>
              <div>
                <StyledDeleteOutlineIcon
                  sx={{ fontSize: '30px' }}
                  onClick={() => {
                    onDeleteContact(id);
                  }}
                />
              </div>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
