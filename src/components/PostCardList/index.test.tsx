import { render, screen } from '@testing-library/react'

import { posts } from 'mocks/tests/posts'

import PostCardList from '.'

describe('PostCardList component', () => {
  it('should render PostCardList component with posts list', () => {
    render(<PostCardList posts={posts} />)

    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(screen.getAllByRole('link')).toHaveLength(3)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)

    expect(screen.getByText('Publicado por Jon snow')).toBeInTheDocument()
    expect(screen.getByText('Publicado por Sansa Stark')).toBeInTheDocument()
    expect(screen.getByText('Publicado por Arya Stark')).toBeInTheDocument()
  })
})
