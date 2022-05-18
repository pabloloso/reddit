import { Child, PostsMapped } from 'types/Posts'

export const mapperPosts = (posts: Child[]): PostsMapped[] => posts.map(post => {
  const { data } = post
  const {
    id,
    thumbnail,
    title,
    author,
    score,
    num_comments: numComments,
    created
  } = data

  return {
    id,
    thumbnail,
    title,
    author,
    score,
    numComments,
    created
  }
})
