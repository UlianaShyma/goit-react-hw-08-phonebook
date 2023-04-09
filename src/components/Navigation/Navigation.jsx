import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { NavWrapper, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavWrapper>
      <StyledLink to="/">HOME</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">CONTACTS</StyledLink>}
    </NavWrapper>
  );
};
