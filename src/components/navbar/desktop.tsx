import styled from "styled-components";
import { Mail } from "lucide-react";
import { Button } from "../button";
import { EmailFieldWrapper, Input, ListItem } from "./common";

export function DesktopNavbar() {
  return (
    <OuterWrapper>
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
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  @media (max-width: 1020px) {
    display: none;
  }
`;

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

const FormWrapper = styled.div`
  display: flex;
  gap: 26px;
  font-size: 14px;
`;
