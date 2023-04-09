import styled from 'styled-components';

export const Label = styled.label`
  font-size: 18px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Input = styled.input`
 font-size: 15px;
 width: 240px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 4px 8px;

  &:hover,
  &:focus {
    outline-color: rgba(208, 184, 252, 0.9);
`;
