import styled from "styled-components";

const Wrapper = styled.div<{ $width?: string; $height?: string }>`
  width: ${(p) => (p.$width ? p.$width : undefined)};
  height: ${(p) => (p.$height ? p.$height : undefined)};
`;

export const SizedBox = ({ h, w }: { w?: string; h?: string }) => {
  return <Wrapper $height={h} $width={w} />;
};
