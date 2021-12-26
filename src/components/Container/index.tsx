import { Element } from './styles'

type Props = {
  children: React.ReactNode
  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

const Container = ({ children, ...rest }: Props) => {
  return <Element {...rest}>{children}</Element>
}

export default Container
