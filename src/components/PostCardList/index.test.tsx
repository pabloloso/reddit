import { render, screen } from '@testing-library/react'

import { postsMapped } from 'mocks/tests/posts'

import PostCardList from '.'

describe('PostCardList component', () => {
  it('should render PostCardList component with posts list', () => {
    render(<PostCardList posts={postsMapped} />)

    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2)

    expect(screen.getByText('Publicado por Rollipollipotamus')).toBeInTheDocument()
    expect(screen.getByText('Publicado por Kukuzahara')).toBeInTheDocument()
  })
})
