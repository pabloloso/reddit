import { screen, render } from '@testing-library/react'

import Loader from '.'

describe('Loader component', () => {
  it('should render Loader component div', () => {
    render(<Loader />)

    expect(screen.getByTestId('loader-spinner')).toBeInTheDocument()
  })
})
