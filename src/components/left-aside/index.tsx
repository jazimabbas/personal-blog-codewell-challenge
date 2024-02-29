import styled from "styled-components";
import { Briefcase, Linkedin, ExternalLink } from "lucide-react";

export function LeftAside() {
  return (
    <Wrapper>
      <Items>
        <Item>
          <Icon as={Briefcase} size={18} />
          <p>SaaS</p>
        </Item>
        <Item>
          <Icon as={Briefcase} size={18} />
          <p>Design</p>
        </Item>
        <Item>
          <Icon as={Briefcase} size={18} />
          <p>Development</p>
        </Item>
      </Items>
      <Divider />
      <Items>
        <Item>
          <Linkedin size={18} />
          <p>LinkedIn</p>
          <ShareIconWrapper>
            <ExternalLink size={15} />
          </ShareIconWrapper>
        </Item>
        <Item>
          <Linkedin size={18} />
          <p>GitHub</p>
          <ShareIconWrapper>
            <ExternalLink size={15} />
          </ShareIconWrapper>
        </Item>
        <Item>
          <Linkedin size={18} />
          <p>Twitter</p>
          <ShareIconWrapper>
            <ExternalLink size={15} />
          </ShareIconWrapper>
        </Item>
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  --padding: 12px 15px;

  flex-basis: 170px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: var(--padding);

  &:hover {
    background-color: var(--bg-light);
    border-radius: 5px;
  }

  p {
    margin-top: 3px;
    flex: 1;
  }
`;

const Divider = styled.div`
  background-color: #dadada;
  height: 1px;
  width: 100%;
  margin: 16px 0;
`;

const ShareIconWrapper = styled.div`
  margin-left: auto;
`;

const Icon = styled.svg`
  flex-shrink: 0;
`;
