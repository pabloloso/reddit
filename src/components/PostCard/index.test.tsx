import { render, screen } from '@testing-library/react'

import { postMapped1 } from 'mocks/tests/posts'

import PostCard from '.'

describe('PostCard component', () => {
  it('should render PostCard component with post data', () => {
    render(<PostCard
      id={postMapped1.id}
      author={postMapped1.author}
      created={postMapped1.created}
      numComments={postMapped1.numComments}
      score={postMapped1.score}
      thumbnail={postMapped1.thumbnail}
      title={postMapped1.title}
      permalink={postMapped1.permalink}
    />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/r/pics/comments/uwm0dj/oc_a_picture_i_took_of_the_sunset_at_queens_bath'
    )
    expect(screen.getByRole('heading', { level: 3, name: /A picture I took of the sunset/i })).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(screen.getByText('Publicado por Rollipollipotamus')).toBeInTheDocument()
    expect(screen.getByText('0 comentarios')).toBeInTheDocument()
    expect(screen.getByText('Puntuación 1')).toBeInTheDocument()
  })
})
