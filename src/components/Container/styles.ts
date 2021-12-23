import styled, { css } from 'styled-components'

type Props = {
  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

export const Element = styled.div<Props>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

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
