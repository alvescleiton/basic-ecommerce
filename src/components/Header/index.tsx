import Container from '@/Components/Container'
import Logo from '@/Components/Logo'
import MiniCart from '@/Components/MiniCart'

import * as S from './styles'

const Header = () => {
  return (
    <S.Background>
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Logo />

        <MiniCart />
      </Container>
    </S.Background>
  )
}

export default Header
