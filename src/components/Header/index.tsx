import React from 'react'

import Container from '@/Components/Container'
import Cart from '@/Components/Header/Cart'
import Logo from '@/Components/Header/Logo'

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
