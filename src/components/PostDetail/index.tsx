import Link from 'next/link'

import { PostsMapped } from 'types/Posts'

import { timeSince } from 'utils/timeSince'

import {
  PostDetailClose,
  PostDetailContent,
  PostDetailCard,
  Author,
  ImageTitleContainer,
  Title,
  ScoreCommentsContainer
} from './styles'

const PostDetail = ({
  author,
  created,
  numComments,
  score,
  thumbnail,
  title
}: Omit<PostsMapped, 'id' | 'permalink'>) => {
  const todayTimespant = new Date().getTime()

  return (
    <>
      <PostDetailClose>
        <Link href='/'>
          Cerrar
        </Link>
      </PostDetailClose>
      <PostDetailContent>
        <PostDetailCard>
          <Author>Publicado por {author} hace {timeSince(todayTimespant, created)}</Author>
          <ImageTitleContainer>
            <img src={thumbnail} />
            <Title>{title}</Title>
          </ImageTitleContainer>
          <ScoreCommentsContainer>
            <span>
              Puntuación {score}
            </span>
            <span>
              {numComments} comentarios
            </span>
          </ScoreCommentsContainer>
        </PostDetailCard>
      </PostDetailContent>
    </>
  )
}

export default PostDetail
