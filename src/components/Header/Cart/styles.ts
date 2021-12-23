import styled from 'styled-components'

export const CartContainer = styled.div`
  position: relative;
  height: 26px;

  > img {
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
  background: #333;
  color: #fff;
  width: 17px;
  height: 17px;
  font-size: 10px;
  border-radius: 50%;
`
