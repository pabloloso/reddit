import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPostsRequestAction } from 'store/posts/actions'
import { getPosts } from 'store/posts/selectors'

function Home () {
  const dispatch = useDispatch()

  const posts = useSelector(getPosts)

  useEffect(() => {
    dispatch(fetchPostsRequestAction())
  }, [])

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default Home
