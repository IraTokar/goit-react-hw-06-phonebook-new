import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';  

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormField = styled(Field)`
  padding: 4px;
  font: inherit;
  background-color: transparent ;
  border: 1px solid black;
`;

export const MessageError = styled(ErrorMessage)`
  color: red;
  font-size: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid blueviolet;
  padding: 5px;
  width: 120px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  font-size: 16px;

`;

