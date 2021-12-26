import styled, { css } from 'styled-components'

import rgba from 'polished/lib/color/rgba'
import breakpoints from 'src/utils/breakpoints'

type CartProps = {
  added: boolean
}

export const ProductContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 2px 2px 5px ${props => rgba(`${props.theme.colors.black}`, 0.1)};
  flex: 1 1 auto;
  margin: 5px 0;
  transition: 0.25s all ease;

  @media ${breakpoints.tabletSmall} {
    max-width: 356px;
  }

  @media ${breakpoints.tablet} {
    flex: 1 1 auto;
    max-width: 296px;
  }

  @media ${breakpoints.desktop} {
    max-width: 278px;
  }

  &:hover {
    box-shadow: 2px 2px 10px ${props => rgba(`${props.theme.colors.black}`, 0.2)};
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  img {
    max-width: 80%;
    max-height: 80%;
  }
`

export const Details = styled.div`
  border-top: 1px solid ${props => props.theme.colors.grayExtraLight};
  padding: 15px 0;
`

export const Title = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
`

export const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 18px;
  color: ${props => props.theme.colors.grayMedium};
  margin-bottom: 20px;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-start;

  sup {
    margin-top: 4px;
    margin-left: 7px;
    text-decoration: line-through;
    color: ${props => props.theme.colors.grayMedium};
    font-size: ${props => props.theme.fontSizes.small};
  }

  strong {
    font-size: ${props => props.theme.fontSizes.large};
  }
`

export const Cart = styled.button<CartProps>`
  position: relative;
  padding: 5px;
  font-size: ${props => props.theme.fontSizes.small};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s all ease;

  ${props =>
    !props.added &&
    css`
      @media ${breakpoints.tabletSmall} {
        font-size: ${props => props.theme.fontSizes.extraSmall};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

  ${props =>
    props.added &&
    css`
      background: transparent;
      color: green;
      font-size: ${props.theme.fontSizes.small};
      pointer-events: none;
    `}
`
