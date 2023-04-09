import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: right;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgba(36, 50, 65, 0.8);
  }

  &.active {
    color: rgba(36, 50, 65, 0.8);
    border-bottom: 2px solid rgba(208, 184, 252, 1);
  }
`;
