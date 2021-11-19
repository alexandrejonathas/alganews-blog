import { Post } from "alexandrejonathas-alganews-sdk"
import styled from "styled-components"
import Avatar from "./Avatar.component"

import Link from "next/link"
import { transparentize } from "polished"

interface FeaturedPostProps {
  postSummary: Post.Summary
}

export default function FeaturedPost ({ postSummary }: FeaturedPostProps) {
  const { id, slug } = postSummary 
  return (
    <Link href={`/posts/${id}/${slug}`} passHref > 
      <Wrapper>
        <BgImage bg={postSummary.imageUrls.medium} />
        <Content>
          <Tags>
            { postSummary.tags.map(tag => <Tag key={tag}>{tag}</Tag>) }
          </Tags>
          <Editor>
              <Avatar src={ postSummary.editor.avatarUrls.small } />
              <EditorDescription>
                <EditorName>
                  {postSummary.editor.name}
                </EditorName>
                <PostDate>
                  ha 3 dias
                </PostDate>
              </EditorDescription>
          </Editor>
          <Title>
            { postSummary.title }
          </Title>
        </Content>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.a`
  display: flex;
  align-items: center;

  position: relative;
  overflow: hidden;

  background-color: ${ p => p.theme.primaryBackground };
  color: ${ p => p.theme.primaryForeground };

  padding: 32px;

  width: 100%;
  min-height: 256px;

  border-radius: ${ p => p.theme.borderRadius };

  text-decoration: none;

  transition: box-shadow 0.25s ease;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${ p => transparentize(0.7, p.theme.primaryBackground) };
  }

`

const BgImage = styled.div<{bg: string}>`
  background-image: url(${p => p.bg});
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.05;
  background-color: blue;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  gap: 24px;

  z-index: 1;
`

const Tags = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Tag = styled.li`
  background-color: ${ p => p.theme.activeElementBackground };
  color: ${ p => p.theme.activeElementForeground };

  border-radius: ${ p => p.theme.borderRadius };

  text-transform: lowercase;

  padding: 4px 12px;
  cursor: default;

`

const Editor = styled.div`
  display: flex;
  gap: 16px;
`

const EditorDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const EditorName = styled.p`
  font-size: 14px;
  font-weight: 700;
`

const PostDate = styled.p`
  font-size: 12px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`