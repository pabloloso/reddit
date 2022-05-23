import { render, screen } from '@testing-library/react'

import { post1 } from 'mocks/tests/posts'

import PostDetail from '.'

describe('PostDetail component', () => {
  it('should render PostDetail component data from post', () => {
    render(<PostDetail
      author={post1.author}
      created={post1.created}
      numComments={post1.numComments}
      score={post1.score}
      thumbnail={post1.thumbnail}
      title={post1.title}
    />)

    expect(screen.getByRole('heading', { level: 1, name: /The night is dark/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cerrar' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(screen.getByText('Puntuación 120')).toBeInTheDocument()
    expect(screen.getByText('11 comentarios')).toBeInTheDocument()
    expect(screen.getByText(/Publicado por Jon Snow/i)).toBeInTheDocument()
  })
})
