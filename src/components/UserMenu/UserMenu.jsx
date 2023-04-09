import { Button } from 'components/AppBar/AppBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { getUser } from '../../redux/auth/auth-selectors';
import { Name, UserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <UserWrapper>
      <Name>Welcome, {user.name}!</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LOG OUT
      </Button>
    </UserWrapper>
  );
};
