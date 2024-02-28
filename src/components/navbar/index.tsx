import styled from "styled-components";
import { Mail } from "lucide-react";

export function Navbar() {
  return (
    <Wrapper>
      <Brand>Jazim Abbas</Brand>
      <Nav>
        <ListItems>
          <ListItem>
            <a href="">Writings</a>
          </ListItem>
          <ListItem>
            <a href="">Awards</a>
          </ListItem>
          <ListItem>
            <a href="">Sponser</a>
          </ListItem>
        </ListItems>
        <FormWrapper>
          <EmailFieldWrapper>
            <Mail size={18} />
            <Input placeholder="jazim@example.com" />
          </EmailFieldWrapper>
          <Button>Create new post</Button>
        </FormWrapper>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  padding: 40px 0;
  align-items: center;
`;

const Brand = styled.p`
  color: var(--color-dark-text);
  font-weight: 800;
  flex-basis: 150px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const ListItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 47px;
  padding-left: 0;
  flex: 1;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  gap: 26px;
  font-size: 14px;
`;

const EmailFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-light);
  border-radius: 5px;
  padding: 16px;
`;

const Input = styled.input`
  background-color: transparent;
  color: var(--color-light-text);
  border: none;
  outline: none;
  flex: 1;
`;

const Button = styled.button`
  padding: 16px 21px;
  background-color: #2d2727;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;
