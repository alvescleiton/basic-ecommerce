import styled from 'styled-components'

export const CartContainer = styled.div`
  position: relative;
  height: 26px;

  img {
    height: 26px;
  }
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
