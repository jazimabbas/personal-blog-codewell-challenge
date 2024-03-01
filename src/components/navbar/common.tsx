import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const EmailFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-light);
  border-radius: 5px;
  padding: 16px;
`;

export const Input = styled.input`
  background-color: transparent;
  color: var(--color-light-text);
  border: none;
  outline: none;
  flex: 1;
`;
