import { PostsMapped } from 'types/Posts'

export interface PostPageProps {
  post: PostsMapped
}

export interface GetServerSidePropsContext {
  resolvedUrl: string
}
