import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPostsRequestAction } from 'store/posts/actions'
import { getIsFetching, getPosts } from 'store/posts/selectors'

import PostCardList from 'components/PostCardList'
import Button from 'components/common/Button'

import { ButtonContainer } from 'styles/pages/Home'

const HomePage = () => {
  const [updateList, setUpdateList] = useState(false)

  const dispatch = useDispatch()

  const isFetching = useSelector(getIsFetching)
  const posts = useSelector(getPosts)

  useEffect(() => {
    dispatch(fetchPostsRequestAction())
  }, [updateList])

  const handleUpdateList = () => {
    if (!isFetching) {
      setUpdateList(!updateList)
    }
  }

  return (
    <>
      <ButtonContainer>
        <Button
          label="Actualizar"
          onClick={handleUpdateList}
        />
      </ButtonContainer>
      {isFetching ? 'Loading ...' : <PostCardList posts={posts} />}
    </>
  )
}

export default HomePage
