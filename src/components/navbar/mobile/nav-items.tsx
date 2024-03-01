import { Mail, X } from "lucide-react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { Button } from "../../button";
import { EmailFieldWrapper, Input, ListItem } from "../common";
import { MaxWidthWrapper } from "../../max-width";

export function NavItems({ setIsMenuOpen }: { setIsMenuOpen: any }) {
  return createPortal(
    <Wrapper>
      <MaxWidthWrapper>
        <ContentWrapper>
          <CloseIcon as={X} size={25} onClick={setIsMenuOpen} />
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
          <EmailFieldWrapper>
            <Mail size={18} />
            <Input placeholder="jazim@example.com" />
          </EmailFieldWrapper>
          <Button>Create new post</Button>
        </ContentWrapper>
      </MaxWidthWrapper>
    </Wrapper>,
    document.body
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const ContentWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100%;
  overflow: hidden;
  padding: 20px 0;
`;

const CloseIcon = styled.svg`
  align-self: flex-end;
  color: #000;
`;

const ListItems = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
