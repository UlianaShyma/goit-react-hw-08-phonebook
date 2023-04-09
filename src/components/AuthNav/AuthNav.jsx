import { Button } from 'components/AppBar/AppBar.styled';
import { AuthWrapper, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrapper>
      <StyledLink to="/register">
        <Button>SIGN UP</Button>
      </StyledLink>
      <StyledLink to="/login">
        <Button>LOG IN</Button>
      </StyledLink>
    </AuthWrapper>
  );
};
