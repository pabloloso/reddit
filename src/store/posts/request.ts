import axios from 'axios'

import { Posts } from 'types/Posts'

import { mapperPosts } from './mapper'

export const fetchPosts = async () => {
  return axios
    .get<Posts>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/r/pics/new.json`)
    .then(response => mapperPosts(response.data.data.children))
}
