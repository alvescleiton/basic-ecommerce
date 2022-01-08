import Link from 'next/link'

import * as S from './styles'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <S.ContainerLogo>
          <S.Circle>DS</S.Circle>
          <S.Title>Dev Store</S.Title>
        </S.ContainerLogo>
      </a>
    </Link>
  )
}

export default Logo
