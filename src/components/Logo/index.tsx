import React from 'react'

import Link from 'next/link'

import { ContainerLogo } from './styles'

const Logo = () => {
  return (
    <Link href="/">
      <ContainerLogo>
        <strong>DEV</strong> <span>STORE</span>
      </ContainerLogo>
    </Link>
  )
}

export default Logo
