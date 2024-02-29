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
    </Wrapper>
  );
}

const Wrapper = styled.aside`
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
  padding: 10px;
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
