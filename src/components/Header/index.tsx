import Container from '@/Components/Container'
import Logo from '@/Components/Logo'
import MiniCart from '@/Components/MiniCart'

import { Background } from './styles'

const Header = () => {
  return (
    <Background>
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Logo />

        <MiniCart />
      </Container>
    </Background>
  )
}

export default Header
