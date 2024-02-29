import { Command } from "lucide-react";
import styled from "styled-components";

export function RightAside() {
  return (
    <Wrapper>
      <SearchWrapper>
        <Input placeholder="Search Post" />
        <CommandWrapper>
          <Command size={15} />
          <span>S</span>
        </CommandWrapper>
      </SearchWrapper>
      <ProjectsWrapper>
        <Heading>Projects</Heading>
        <Divider />
        <Items>
          <li>
            <a href="">Codewell</a>
          </li>
          <li>
            <a href="">Spense</a>
          </li>
          <li>
            <a href="">YelCamp</a>
          </li>
        </Items>
      </ProjectsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  --padding: 15px;

  flex-basis: 210px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  border: 1px solid var(--color-border);
  padding: var(--padding);
  font-size: 14px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const CommandWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 3px;
  border: 1px solid var(--color-border);
  align-items: center;
  padding: 4px;
`;

const ProjectsWrapper = styled.div`
  --gap: 20px;

  padding: calc(var(--padding) * 2) var(--padding);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-border);
`;

const Heading = styled.h3`
  color: #110e27;
  font-weight: 700;
`;

const Items = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
