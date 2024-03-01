import styled from "styled-components";
import { Button } from "../button";

export function SecondaryCard() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Announcing a new platform, Codewell.</Heading>
        <p>
          Codewell is a platform that helps you improve your frontend skills by practicing on real
          world design templates.
        </p>
        <ActionsWrapper>
          <Button>Visit Codewell</Button>
          <Link href="">Learn more</Link>
        </ActionsWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <img src="/Illustration.svg" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  display: flex;
`;

const ContentWrapper = styled.div`
  flex-basis: calc(100% - 313px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #110e27;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 14px;
`;

const ImageWrapper = styled.div`
  align-self: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;
