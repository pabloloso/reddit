import Link from 'next/link'

import { PostsMapped } from 'types/Posts'

import { PostCardListContainer, ImageContainer, Image, Date, Title, Author, Score, Comments } from './styles'

const PostCard = ({ author, created, numComments, score, thumbnail, title, permalink }: PostsMapped) => {
  return (
    <Link href={permalink}>
      <a target="_blank">
        <PostCardListContainer>
          <ImageContainer>
            <Image src={thumbnail} />
          </ImageContainer>
          <Date>{created}</Date>
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
