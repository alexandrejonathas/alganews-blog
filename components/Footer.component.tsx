import styled from "styled-components"

import { transparentize } from "polished"
import { CONTAINER_MAX_WIDTH, FOOTER_HEIGHT } from "../_constants"

export default function Footer (props: any) {
  return <>
    <Wrapper>
      <Container>
        <span>logo</span>
        <span>créditos</span>
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
  color: ${ p => p.theme.primaryBackground}
`