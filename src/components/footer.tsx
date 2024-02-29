import styled from "styled-components";
import { MaxWidthWrapper } from "./max-width";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <ContentWrapper>
          <Brand>Jazim Abbas</Brand>
          <p>© {currentYear} Jazim Abbas, All Rights Reserved</p>
          <LinksWrapper>
            <LinkItem>
              <Link href="https://www.linkedin.com/in/jazimabbas">LinkedIn</Link>
            </LinkItem>
            <LinkItem>
              <Link href="https://github.com/jazimabbas">GitHub</Link>
            </LinkItem>
          </LinksWrapper>
        </ContentWrapper>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--color-secondary);
  padding-top: 130px;
  padding-bottom: 50px;
  color: #000;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.p`
  font-weight: 700;
`;

const LinksWrapper = styled.ul`
  display: flex;
  gap: 20px;
`;

const LinkItem = styled.li`
  list-style: none;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;
