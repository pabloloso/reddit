import { render, screen } from '@testing-library/react'

import { post1 } from 'mocks/tests/posts'

import PostCard from '.'

describe('PostCard component', () => {
  it('should render PostCard component with post data', () => {
    render(<PostCard
      id={post1.id}
      author={post1.author}
      created={post1.created}
      numComments={post1.numComments}
      score={post1.score}
      thumbnail={post1.thumbnail}
      title={post1.title}
      permalink={post1.permalink}
    />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/link')
    expect(screen.getByRole('heading', { level: 3, name: /The night is dark/i })).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(screen.getByText('Publicado por Jon snow')).toBeInTheDocument()
    expect(screen.getByText('11 comentarios')).toBeInTheDocument()
    expect(screen.getByText('Puntuación 120')).toBeInTheDocument()
  })
})
