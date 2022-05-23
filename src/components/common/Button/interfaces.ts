import { MouseEventHandler } from 'react'

export interface ButtonProps {
  label: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}
