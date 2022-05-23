import { MouseEventHandler } from 'react'

import { ButtonBase } from './styles'

const Button = ({ label, onClick }: { label: string, onClick: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <ButtonBase onClick={onClick}>
      {label}
    </ButtonBase>
  )
}

export default Button
