import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const List = styled.ul`
  font-size: 21px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 5px;

  border-bottom: 1px solid rgba(13, 21, 30, 0.2);

  &:not(:last-child) {
    margin-bottom: 23px;
  }
`;

export const StyledDeleteOutlineIcon = styled(DeleteOutlineIcon)`
  cursor: pointer;

  &:hover,
  &:focus {
    fill: red;
  }
`;
