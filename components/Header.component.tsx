import styled from "styled-components"

export default function Header (props: any) {
  return <>
    <Wrapper>
      <Title>Isso é um titulo - {props.name}</Title>
    </Wrapper>
  </>  
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  color: ${ p => p.theme.primaryBackground}
`