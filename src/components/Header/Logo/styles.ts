import styled from 'styled-components'

export const ContainerLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 5px 0;
  width: 50px;
  height: 50px;
  border: 1px solid ${props => props.theme.colors.grayDark};
  border-radius: 50%;
  font-size: ${props => props.theme.fontSize.extraSmall};
  cursor: pointer;
  transition: 0.25s all ease;

  &:hover {
    opacity: 0.7;
  }

  strong {
    color: ${props => props.theme.colors.primary};
  }

  span {
    color: ${props => props.theme.colors.grayMedium};
  }

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
