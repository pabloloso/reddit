import { LayoutProps } from './interfaces'
import { LayoutBase } from './styles'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutBase>
      {children}
    </LayoutBase>
  )
}

export default Layout
