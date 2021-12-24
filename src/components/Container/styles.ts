import styled, { css } from 'styled-components'

import breakpoints from 'src/utils/breakpoints'

type Props = {
  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

export const Element = styled.div<Props>`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${breakpoints.mobile} {
    max-width: 480px;
  }

  @media ${breakpoints.tabletSmall} {
    max-width: 768px;
  }

  @media ${breakpoints.tablet} {
    max-width: 960px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1200px;
  }

  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}

  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}
`
