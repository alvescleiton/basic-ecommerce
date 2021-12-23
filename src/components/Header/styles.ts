import styled from 'styled-components'

export const Background = styled.div`
  background-color: ${props => props.theme.colors.grayExtraLight};
  border-bottom: 1px solid ${props => props.theme.colors.grayLight};
`

export const Logo = styled.div`
  display: flex;
  width: 140px;
  padding: 10px 0;

  img {
    width: 100%;
  }
`
