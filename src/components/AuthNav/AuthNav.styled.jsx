import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthWrapper = styled.div`
  display: flex;
  align-items: right;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
