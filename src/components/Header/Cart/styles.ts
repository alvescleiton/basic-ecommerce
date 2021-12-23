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
  right: -10px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 50%;
`
