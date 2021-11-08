import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"

import defaultAvatar from "../public/default-avatar.jpeg"

interface AvatarProps {
  src: string
}

export default function Avatar (props: AvatarProps) {
  
  const [src, setSrc] = useState(props.src)

  return <Wrapper>
    <StyledAvatar 
      src={src} 
      width={40} 
      height={40}
      onError={(e) => {
        setSrc(defaultAvatar.src)
      }} />
  </Wrapper>
}

const StyledAvatar = styled(Image)`
  object-fit: cover;
`

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  box-shadow: 0 0 0 4px ${ p => p.theme.primaryForeground };

  overflow: hidden;
`