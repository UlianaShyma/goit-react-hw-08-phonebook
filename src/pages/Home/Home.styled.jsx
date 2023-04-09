import styled from 'styled-components';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const HomeWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-family: 'Gambetta', serif;
  letter-spacing: -1px;
  transition: 700ms ease;
  font-variation-settings: 'wght' 311;
  margin-bottom: 0.8rem;
  color: RoseGold;
  outline: none;
  text-align: center;

  &:hover {
    font-variation-settings: 'wght' 582;
    letter-spacing: 1px;
  }
`;

export const ContactIcon = styled(ContactPhoneIcon)`
  color: rgba(208, 184, 252, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgba(208, 164, 282, 1);
    cursor: pointer;
  }
`;
