import { Post } from "alexandrejonathas-alganews-sdk";
import { transparentize } from "polished";
import styled from "styled-components";
import Image from "next/image"
import Link from "next/link"

interface PostCardProps {
  post: Post.Summary
}
export default function PostCard (props: PostCardProps) {
  const { post } = props
  return <Link href={`/posts/${post.id}/${post.slug}`} passHref>
    <Wrapper>
      <Thumbnail background={post.imageUrls.small} />
      <Info>
          <Editor>
            <EditorImage 
              src={post.editor.avatarUrls.small}
              width={64}
              height={64}
              />
          </Editor>
          <PublishDate>ha 3 dias</PublishDate>
          <Title>{post.title}</Title>
      </Info>
    </Wrapper>
  </Link>
}

const Thumbnail = styled.div<{
  background: string
}>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 50%;

  background-image: url(${ p => p.background });
  background-position: center;
  background-size: cover;

  border-top-left-radius: ${ p => p.theme.borderRadius };
  border-top-right-radius: ${ p => p.theme.borderRadius };
`

const Info = styled.div`
  position: absolute;
  z-index: 2;

  width: 100%;
  height: 50%;

  top: 50%;
  left: 0;

  margin-top: -32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;
  padding: 8px;
`

const Editor = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 32px;
  width: 64px;
  height: 64px;

  box-shadow: 0 0 0 4px ${ p => p.theme.activeElementBackground };
`

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;

  border-radius: 32px;
`

const PublishDate = styled.p`
  font-size: 12px;
  color: ${ p => transparentize(0.5, p.theme.activeElementForeground) };
`

const Title = styled.h2`
  text-align: center;
  font-size: 14px;
`

const Wrapper = styled.a`
  position: relative;
  background-color: ${ p => p.theme.activeElementBackground };
  color: ${ p => p.theme.activeElementForeground};

  padding: 16px;

  min-height: 256px;

  border-radius: ${ p => p.theme.borderRadius };
  box-shadow: 0 3px 6px ${ p => transparentize(0.9, p.theme.activeElementForeground) };

  transition: none.25s ease;

  * {
    transition: none.25s ease;
  }

  &:hover,
  &:focus {
    background-color: ${ p => p.theme.primaryBackground };
    * {
      color: ${ p => p.theme.primaryForeground };
    }
    
    outline: none;
    
    box-shadow: 0 0 0 4px ${ p => transparentize(0.7, p.theme.primaryBackground) };

    ${Thumbnail} {
      height: 100%;
      opacity: 0.1;
    }
  }
`



