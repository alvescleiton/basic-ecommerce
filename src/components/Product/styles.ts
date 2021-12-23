import styled from 'styled-components'

export const ProductContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  transition: 0.25s all ease;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
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
  border-top: 1px solid #eaeaea;
  padding: 15px 0;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  color: #b53575;
`

export const Description = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #666;
  margin-bottom: 20px;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 20px;

  sup {
    margin-top: 2px;
    margin-right: 7px;
    text-decoration: line-through;
    color: #bbb;
    font-size: 14px;
  }
`

export const Cart = styled.button`
  position: relative;
  padding: 5px;
  font-size: 10px;
  background: rgb(181, 53, 117);
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s all ease;

  &:hover {
    opacity: 0.8;
  }
`
