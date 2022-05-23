import { screen, render, fireEvent } from '@testing-library/react'

import Button from '.'

const mockedFunction = jest.fn()

describe('Button component', () => {
  it('should return button with label', () => {
    render(<Button label='My button' onClick={mockedFunction} />)

    const button = screen.getByText('My button')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(mockedFunction).toBeCalled()
  })
})
