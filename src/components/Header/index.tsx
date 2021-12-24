import React from 'react'

import Cart from '@/Components/Cart'
import Container from '@/Components/Container'
import Logo from '@/Components/Logo'

import { Background } from './styles'

const Header = () => {
  return (
    <Background>
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Logo />

        <Cart />
      </Container>
    </Background>
  )
}

export default Header
