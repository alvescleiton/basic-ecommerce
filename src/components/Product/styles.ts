import rgba from 'polished/lib/color/rgba'
import styled from 'styled-components'

export const ProductContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 2px 2px 5px ${props => rgba(`${props.theme.colors.black}`, 0.1)};
  max-width: 320px;
  transition: 0.25s all ease;

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
  font-size: ${props => props.theme.fontSize.large};
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
`

export const Description = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  line-height: 18px;
  color: ${props => props.theme.colors.grayMedium};
  margin-bottom: 20px;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: ${props => props.theme.fontSize.large};

  sup {
    margin-top: 2px;
    margin-right: 7px;
    text-decoration: line-through;
    color: ${props => props.theme.colors.grayLight};
    font-size: ${props => props.theme.fontSize.medium};
  }

  strong {
    font-size: ${props => props.theme.fontSize.large};
  }
`

export const Cart = styled.button`
  position: relative;
  padding: 5px;
  font-size: ${props => props.theme.fontSize.extraSmall};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s all ease;

  &:hover {
    opacity: 0.8;
  }
`
