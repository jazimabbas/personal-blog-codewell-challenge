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
    <Wrapper
      animate={{
        paddingTop: isScrolled ? "20px" : undefined,
        paddingBottom: isScrolled ? "20px" : undefined,
        border: isScrolled ? "1px solid var(--color-border)" : undefined,
      }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <BrandName>Jazim Abbas</BrandName>
      <Icon as={Menu} size={25} onClick={setIsMenuOpen} />
    </Wrapper>
  );
}

const Wrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  isolation: isolate;
  margin: 0 calc(var(--spacing) * -1);
  padding: 40px var(--spacing);
  border-bottom: 1px solid var(--color-border);
`;

const BrandName = styled.h1`
  font-weight: 700;
  color: #000;
  font-size: 16px;
`;

const Icon = styled.svg`
  color: #000;
`;
