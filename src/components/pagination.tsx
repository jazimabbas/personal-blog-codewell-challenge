import styled, { css } from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <Wrapper>
      <Icon as={ChevronLeft} size={18} />
      <Item $isSelected>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Icon as={ChevronRight} size={18} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.svg`
  color: #000;
  cursor: pointer;
`;

const Item = styled.p<{ $isSelected?: boolean }>`
  padding: 5px 12px;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  ${(p) =>
    p.$isSelected &&
    css`
      background-color: #000;
      color: #fff;
    `}

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
