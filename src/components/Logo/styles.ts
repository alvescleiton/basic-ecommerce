import styled from 'styled-components'

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s all ease;

  &:hover {
    opacity: 0.7;
  }
`

export const Circle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 5px 0;
  width: 40px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.grayDark};
  border-radius: 50%;
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    opacity: 0.3;
  }
`

export const Title = styled.div`
  margin-left: 10px;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.primary};
`
