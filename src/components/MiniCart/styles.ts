import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: scale(0.9) rotate(15deg);
  }

  50% {
    transform: scale(1.1) rotate(-15deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
`

type CartContainerProps = {
  isAnimating: boolean
  onClick: () => void
}

export const CartContainer = styled.div<CartContainerProps>`
  position: relative;
  height: 26px;
  cursor: pointer;

  img {
    height: 26px;
  }

  ${props =>
    props.isAnimating &&
    css`
      animation: ${rotate} 0.5s ease-in-out;
    `}
`

export const NumberOfItems = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.grayDark};
  color: ${props => props.theme.colors.white};
  width: 17px;
  height: 17px;
  font-size: ${props => props.theme.fontSizes.extraSmall};
  border-radius: 50%;
`

export const EmptyCart = styled.div`
  padding: 20px;
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
`
