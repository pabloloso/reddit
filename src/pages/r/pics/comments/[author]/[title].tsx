import axios from 'axios'

import PostDetail from 'components/PostDetail'

import { GetServerSidePropsContext, PostPageProps } from 'types/pages/PostPage'

const PostPage = ({ post }: PostPageProps) => {
  return (
    <PostDetail
      author={post.author}
      created={post.created}
      numComments={post.numComments}
      score={post.score}
      thumbnail={post.thumbnail}
      title={post.title}
    />
  )
}

export default PostPage

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const { resolvedUrl } = context

  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resolvedUrl}`)
  const [data] = response.data

  const {
    author,
    created,
    num_comments: numComments,
    score,
    thumbnail,
    title
  } = data.data.children[0].data

  return {
    props: {
      post: {
        author,
        created,
        numComments,
        score,
        thumbnail,
        title
      }
    }
  }
}
