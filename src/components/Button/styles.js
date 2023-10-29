import styled from 'styled-components';

export const ButtontWrapper = styled.button`
  grid-column: 2 / 3;
  width: 55%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
