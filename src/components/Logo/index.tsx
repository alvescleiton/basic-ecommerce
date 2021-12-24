import React from 'react'

import Link from 'next/link'

import { ContainerLogo } from './styles'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <ContainerLogo>
          <strong>DEV</strong> <span>STORE</span>
        </ContainerLogo>
      </a>
    </Link>
  )
}

export default Logo
