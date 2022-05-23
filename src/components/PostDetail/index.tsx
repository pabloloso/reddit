import Link from 'next/link'

import { PostsMapped } from 'types/Posts'

import {
  PostDetailContainer,
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
  return (
    <PostDetailContainer>
      <PostDetailClose>
        <Link href='/'>
          Cerrar
        </Link>
      </PostDetailClose>
      <PostDetailContent>
        <PostDetailCard>
          <Author>Publicado por {author} hace {created}</Author>
          <ImageTitleContainer>
            <img src={thumbnail} />
            <Title>{title}</Title>
          </ImageTitleContainer>
          <ScoreCommentsContainer>
            <div>
              Puntuación {score}
            </div>
            <div>
              {numComments} comentarios
            </div>
          </ScoreCommentsContainer>
        </PostDetailCard>
      </PostDetailContent>
    </PostDetailContainer>
  )
}

export default PostDetail
