import { screen, render } from '@testing-library/react'

import Layout from '.'

describe('Layout component', () => {
  it('should render Layout component with children', () => {
    render(<Layout><div>Render children</div></Layout>)

    expect(screen.getByText('Render children')).toBeInTheDocument()
  })
})
