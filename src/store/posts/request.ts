import axios from 'axios'

import { Posts } from 'types/Posts'

import { mapperPosts } from './mapper'

export const fetchPosts = async () => {
  return axios
    .get<Posts>('https://api.reddit.com/r/pics/new.json')
    .then(response => mapperPosts(response.data.data.children))
}
