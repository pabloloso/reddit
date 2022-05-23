import { PostCardListProps } from './interfaces'

import PostCard from 'components/PostCard'

import { PostCardListContainer } from './styles'

const PostCardList = ({ posts = [] }: PostCardListProps) => {
  return (
    <PostCardListContainer>
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          created={post.created}
          numComments={post.numComments}
          score={post.score}
          thumbnail={post.thumbnail}
          title={post.title}
        />
      ))}
    </PostCardListContainer>
  )
}

export default PostCardList
