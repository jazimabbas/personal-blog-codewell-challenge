import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";

export function Header({ setIsMenuOpen }: { setIsMenuOpen: any }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <OuterWrapper>
      <Wrapper
        animate={{
          paddingTop: isScrolled ? "20px" : undefined,
          paddingBottom: isScrolled ? "20px" : undefined,
          boxShadow: isScrolled ? "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px" : undefined,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <BrandName>Jazim Abbas</BrandName>
        <Icon as={Menu} size={25} onClick={setIsMenuOpen} />
      </Wrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  display: none;
  position: sticky;
  top: 0;
  isolation: isolate;
  z-index: 1;

  @media (max-width: 1020px) {
    display: block;
  }
`;

const Wrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;

  margin: 0 calc(var(--spacing) * -1);
  padding: 40px var(--spacing);
  background-color: #fff;
`;

const BrandName = styled.h1`
  font-weight: 700;
  color: #000;
  font-size: 16px;
`;

const Icon = styled.svg`
  color: #000;
`;
