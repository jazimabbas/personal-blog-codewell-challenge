import styled from "styled-components";
import { Card } from "./card";
import { Newsletter } from "./newsletter";
import { Pagination } from "../pagination";
import { SecondaryCard } from "./secondary-card";

export function MainSection() {
  return (
    <Wrapper>
      <Card
        heading="Understanding the reasons behind a successful startup"
        subHeading="Going over the reasons why most successful startups should understand the basics of
            business instead of just launching into the void without any market study."
        imageURL="/card-image-01.png"
        timestamp="23/11/2021"
      />
      <SecondaryCard />
      <Card
        heading="I quit my job last year to pursue freelancing full time."
        subHeading="Quitting my full time job was not an easy decision to make, but it was one that has changed my life 180 degrees. Here’s my story from A to Z."
        imageURL="/card-image-02.png"
        timestamp="20/11/2021"
      />
      <Pagination />
      <Newsletter />

      <div style={{ marginBottom: "50px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
