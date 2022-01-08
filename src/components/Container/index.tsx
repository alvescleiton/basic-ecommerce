import * as S from './styles'

type Props = {
  children: React.ReactNode
  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

const Container = ({ children, ...rest }: Props) => {
  return <S.Container {...rest}>{children}</S.Container>
}

export default Container
