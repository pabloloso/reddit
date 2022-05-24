import { render, screen } from '@testing-library/react'

import PostPage from 'pages/r/pics/comments/[author]/[title]'

import { postMapped1 } from 'mocks/tests/posts'

describe('PostPage component', () => {
  it('should render PostPage component with elements for the Post', () => {
    render(<PostPage post={postMapped1} />)

    expect(screen.getByRole('link', { name: 'Cerrar' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('heading', { name: /A picture I took of the sunset /i })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://b.thumbs.redditmedia.com/MGMmw3lAXYqTxaU6S_FpbjGWM2dM1lYLQuAQawXMlRk.jpg'
    )

    expect(screen.getByText(/Publicado por Rollipollipotamus/i)).toBeInTheDocument()
    expect(screen.getByText('Puntuación 1')).toBeInTheDocument()
    expect(screen.getByText('0 comentarios')).toBeInTheDocument()
  })
})
