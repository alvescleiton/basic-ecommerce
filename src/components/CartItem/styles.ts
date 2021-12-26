import styled from 'styled-components'

import breakpoints from 'src/utils/breakpoints'

export const ContainerCartItem = styled.tr``

export const ProductImage = styled.td`
  width: 40px;

  img {
    width: 40px;
  }

  @media ${breakpoints.tabletSmall} {
    width: 70px;

    img {
      width: 70px;
    }
  }
`

export const Title = styled.td`
  padding-left: 10px;
`

export const Quantity = styled.td`
  width: 10%;
  text-align: center;
`

export const Price = styled.td`
  width: 20%;
  text-align: right;
`

export const Remove = styled.td`
  width: 30px;
  text-align: center;
  color: ${props => props.theme.colors.primary};

  button {
    border: 0;
    color: ${props => props.theme.colors.primary};
    background: transparent;
    font-weight: 700;
  }
`
