import styled from "styled-components";

export const Container = styled.button`
  height: 38px;
  border: none;
  color: var(--bg-second);
  background-color: var(--bg-primary);
  transition: 300ms all linear;
  cursor: pointer;

  &:hover{
       transform: translateY(-4px);
       filter: brightness(100%);
       box-shadow: 0px 3px 7px var(--bg-primary);
  }
`