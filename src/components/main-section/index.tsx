import styled from "styled-components";
import { Card } from "./card";
import { SecondaryCard } from "./secondary-card";

export function MainSection() {
  return (
    <Wrapper>
      <Card />

      <SecondaryCard />

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
