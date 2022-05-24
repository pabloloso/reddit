import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import HomePage from 'pages'

import composeStore from 'store'

const store = composeStore()

describe('HomePage component', () => {
  it('should render HomePage component with elements for the Home', () => {
    render(<Provider store={store}><HomePage /></Provider>)

    expect(screen.getByRole('button', { name: 'Actualizar' })).toBeInTheDocument()
  })
})
