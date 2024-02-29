import styled from "styled-components";
import { Button } from "../button";

export function SecondaryCard() {
  return (
    <Wrapper>
      <ContentWrapper>
        <h2>Announcing a new platform, Codewell.</h2>
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
        <img src="https://bluedeepart.github.io/codewell-challenges/2021/personal-blog/assets/Images/Illustration.svg" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f6ca45;
  border-radius: 1px solid #f6ca45;
  display: flex;
`;

const ContentWrapper = styled.div`
  flex-basis: calc(100% - 313px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #110e27;
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
`;
