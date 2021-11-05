import styled from "styled-components"

import { transparentize } from "polished"
import { CONTAINER_MAX_WIDTH, FOOTER_HEIGHT } from "../_constants"
import Logo from "./Logo.component"

export default function Footer (props: any) {
  return <>
    <Wrapper>
      <Container>
        <Logo />
        <Credits>todos os direitos reservados</Credits>
      </Container>
    </Wrapper>
  </>  
}

const Wrapper = styled.footer`
  background-color: ${ p => p.theme.activeElementBackground };
  color: ${ p => p.theme.activeElementForeground };

  width: 100%;
  height: ${FOOTER_HEIGHT}px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  max-width: ${CONTAINER_MAX_WIDTH}px;
  height: ${FOOTER_HEIGHT}px;

  margin: auto;
`

const Title = styled.h1`
  color: ${ p => p.theme.primaryBackground};
`

const Credits = styled.p`
  font-size: 18px;
  color: ${ p => transparentize(0.6, p.theme.activeElementForeground) };
`