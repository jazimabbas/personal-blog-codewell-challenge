import styled from "styled-components";

import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { LeftAside } from "./components/left-aside";
import { RightAside } from "./components/right-aside";
import { MainSection } from "./components/main-section";
import { MaxWidthWrapper } from "./components/max-width";

export default function App() {
  const items = Array.from({ length: 500 }, (_, index) => index);

  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        {/* <Main>
          <LeftAside />
          <MainSection />
          <RightAside />
        </Main> */}
        {items.map((item) => (
          <p key={item}>{item.toString()}</p>
        ))}
      </MaxWidthWrapper>
      {/* <Footer /> */}
    </>
  );
}

const Main = styled.main`
  display: flex;
  gap: 40px;
  padding-top: 20px;
`;
