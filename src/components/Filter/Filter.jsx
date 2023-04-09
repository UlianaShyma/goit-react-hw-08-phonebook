import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { Input, Label } from './Filter.styled';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();

  const onHadleChange = event => {
    let contactToFilter = event.target.value.trim().toLowerCase();
    dispatch(setFilter(contactToFilter));
  };

  return (
    <>
      <Label>
        <SearchIcon />
        <Input
          placeholder="Find contacts by name..."
          type="text"
          name="name"
          onChange={onHadleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </>
  );
};
