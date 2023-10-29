import styled from 'styled-components';

const inputStyles = `
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  margin: 5px 0;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.75rem;
  font-size: 16px;
`;

export const InputWrapper = styled.input`
  ${inputStyles}
`;

export const TextAreaWrapper = styled.textarea`
  ${inputStyles}
  font-family: 'Roboto', sans-serif;
`;

export const LabelWrapper = styled.label`
  color: #0056b3;
  font-weight: bold;
`;
