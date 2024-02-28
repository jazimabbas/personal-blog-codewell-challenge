import styled from "styled-components";
import { Card } from "./card";

export function MainSection() {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex: 1;
`;
