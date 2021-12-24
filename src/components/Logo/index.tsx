import React from 'react'

import Link from 'next/link'

import { ContainerLogo, Circle, Title } from './styles'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <ContainerLogo>
          <Circle>DS</Circle>
          <Title>Dev Store</Title>
        </ContainerLogo>
      </a>
    </Link>
  )
}

export default Logo
