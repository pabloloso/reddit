import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPostsRequestAction } from 'store/posts/actions'
import { getPosts } from 'store/posts/selectors'

import PostCardList from 'components/PostCardList'

const HomePage = () => {
  const dispatch = useDispatch()

  const posts = useSelector(getPosts)

  useEffect(() => {
    dispatch(fetchPostsRequestAction())
  }, [])

  return (
    <PostCardList posts={posts} />
  )
}

export default HomePage
