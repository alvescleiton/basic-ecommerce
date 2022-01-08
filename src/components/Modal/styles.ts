import styled, { css } from 'styled-components'

import breakpoints from 'src/utils/breakpoints'

type BackgroundProps = {
  isOpen: boolean
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => `${props.theme.colors.black}80`};
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s all ease;

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
  min-width: auto;

  @media ${breakpoints.tabletSmall} {
    min-width: 600px;
  }
`
