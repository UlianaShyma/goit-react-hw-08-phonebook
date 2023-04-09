import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 20px;

  background-color: rgba(255, 255, 255, 1);
  color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 31px 6px rgba(161, 161, 193, 0.3);
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  font-size: 17px;
`;

export const Input = styled.input`
  width: 260px;
  height: 30px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 4px 8px;

  &:hover,
  &:focus {
    outline-color: rgba(208, 184, 252, 0.9);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 5px;
  font-size: 18px;
  width: 150px;
  height: 40px;
  border: none;
  color: black;

  border-radius: 4px;
  font-size: 16px;
  fill: grey;
  background-image: linear-gradient(150deg, rgba(238, 174, 202, 0.5), rgba(148, 187, 233, 0.5));
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1), fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
 
  &:hover,
  &:focus {
  fill: white;
  
 box-shadow:  0 0 15px 0px rgba(0, 0, 0, 0.25),
  inset 0 2px 1px 1px rgba(255, 255, 255, 0.1),
   1px 1px 1px 2px rgba(154, 137, 164, 0.5);
    cursor: pointer;

`;
