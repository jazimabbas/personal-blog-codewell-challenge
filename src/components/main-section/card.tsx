import styled from "styled-components";

type Props = {
  heading: string;
  subHeading: string;
  imageURL: string;
  timestamp: string;
};

export function Card({ heading, subHeading, imageURL, timestamp }: Props) {
  return (
    <Wrapper>
      <SectionWrapper>
        <ContentWrapper>
          <Heading>{heading}</Heading>
          <p>{subHeading}</p>
        </ContentWrapper>
        <img src={imageURL} />
      </SectionWrapper>
      <Footer>
        <FirstSection>
          <img src="user-avatar.svg" />
          <Username>Jazim Abbas </Username>
          <Time>12 hours ago</Time>
        </FirstSection>
        <p>{timestamp}</p>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
  border: 1px solid #e5e5e5;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  flex-basis: calc(100% - 313px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h2`
  color: var(--color-dark-text);
  font-size: 20px;
  font-weight: 700;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const FirstSection = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.p`
  font-weight: 700;
  color: var(--color-dark-text);
  padding-left: 10px;
`;

const Time = styled.p`
  padding-left: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    left: 20px;
    top: 10px;
    border-radius: 50%;
    background-color: #70747d;
  }
`;
