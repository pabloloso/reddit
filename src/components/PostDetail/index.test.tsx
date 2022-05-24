import { render, screen } from '@testing-library/react'

import { postMapped1 } from 'mocks/tests/posts'

import PostDetail from '.'

describe('PostDetail component', () => {
  it('should render PostDetail component with data from post', () => {
    render(<PostDetail
      author={postMapped1.author}
      created={postMapped1.created}
      numComments={postMapped1.numComments}
      score={postMapped1.score}
      thumbnail={postMapped1.thumbnail}
      title={postMapped1.title}
    />)

    expect(screen.getByRole('heading', { level: 1, name: /A picture I took of the sunset/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cerrar' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(screen.getByText('Puntuación 1')).toBeInTheDocument()
    expect(screen.getByText('0 comentarios')).toBeInTheDocument()
    expect(screen.getByText(/Publicado por Rollipollipotamus/i)).toBeInTheDocument()
  })
})
