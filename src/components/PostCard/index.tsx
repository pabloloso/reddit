import Link from 'next/link'

import { PostsMapped } from 'types/Posts'

import { timeSince } from 'utils/timeSince'

import { PostCardListContainer, ImageContainer, Image, Date, Title, Author, Score, Comments } from './styles'

const PostCard = ({ author, created, numComments, score, thumbnail, title, permalink }: PostsMapped) => {
  const todayTimespant = new window.Date().getTime()

  return (
    <Link href={permalink}>
      <a target="_blank">
        <PostCardListContainer>
          <ImageContainer>
            <Image src={thumbnail} />
          </ImageContainer>
          <Date>Publicado hace {timeSince(todayTimespant, created)}</Date>
          <Title>{title}</Title>
          <Author>
            Publicado por {author}
          </Author>
          <Score>
            Puntuación {score}
          </Score>
          <Comments>
            {numComments} comentarios
          </Comments>
        </PostCardListContainer>
      </a>
    </Link>
  )
}

export default PostCard
