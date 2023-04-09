import styled from 'styled-components';

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 5px 25px;
`;

export const AddDiv = styled.div`
  border-bottom: 2px solid rgba(208, 184, 252, 0.7);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 5px;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  height: 40px;
  border: none;
  color: rgba(13, 21, 30, 0.9);
  border-radius: 4px;
  font-size: 16px;
  
  background-image: linear-gradient(150deg, rgba(238, 174, 202, 0.5), rgba(148, 187, 233, 0.5));
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
 
  &:hover,
  &:focus {
    box-shadow:   0 0 15px 0px rgba(0, 0, 0, 0.25),
        inset 0 2px 1px 1px rgba(255, 255, 255, 0.1),
        1px 1px 1px 2px rgba(154, 137, 164, 0.5);
    cursor: pointer;

`;
