import { Navbar } from "./components/navbar";
import { LeftAside } from "./components/left-aside";
import { MainSection } from "./components/main-section";
import { MaxWidthWrapper } from "./components/max-width";
import styled from "styled-components";

export default function App() {
  return (
    <MaxWidthWrapper>
      <Navbar />

      <Main>
        <LeftAside />
        <MainSection />
        <RightAside>
          <p>Right Aside</p>
        </RightAside>
      </Main>
    </MaxWidthWrapper>
  );
}

const Main = styled.main`
  display: flex;
  gap: 60px;
`;

const RightAside = styled.aside`
  flex-basis: 200px;
`;
