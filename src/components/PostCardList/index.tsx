import { PostCardListProps } from './interfaces'

import PostCard from 'components/PostCard'

const PostCardList = ({ posts = [] }: PostCardListProps) => {
  return (
    <div>
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
          permalink={post.permalink}
        />
      ))}
    </div>
  )
}

export default PostCardList
