import styled from "styled-components";

export function Newsletter() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Want to stay up to date with my project Codewell?</Heading>
        <Description>
          Receive non-frequent emails about my startup Codewell, you can unsubscribe any time.
        </Description>
        <Input placeholder="jazim@example.com" />
      </ContentWrapper>
      <ImageWrapper>
        <img src="/newsletter.png" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --spacing: 30px;

  background-color: #000;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 70px;
  padding-top: var(--spacing);
  margin-bottom: -150px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

const ContentWrapper = styled.div`
  flex-basis: 40%;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: var(--spacing);
  padding-bottom: calc(var(--spacing) + 30px);

  @media (max-width: 768px) {
    padding: var(--spacing);
  }
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 20px;
`;

const Description = styled.p`
  color: #adadad;
`;

const Input = styled.input`
  padding: 16px;
  font-size: 14px;
  border-radius: 5px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    align-self: center;

    img {
      width: 340px;
      /* height: 140px; */
      align-self: center;
    }
  }
`;
