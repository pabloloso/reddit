import { ButtonProps } from './interfaces'
import { ButtonBase } from './styles'

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <ButtonBase onClick={onClick}>
      {label}
    </ButtonBase>
  )
}

export default Button
