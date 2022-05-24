import { mapperPosts } from 'store/posts/mapper'

import { children, postsMapped } from 'mocks/tests/posts'

describe('mapperPosts function', () => {
  it('should return posts mapped data from the api call', () => {
    expect(mapperPosts(children)).toStrictEqual(postsMapped)
  })
})
