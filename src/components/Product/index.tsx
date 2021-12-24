import React from 'react'

import { Cart, Description, Details, Image, Price, ProductContainer, Title } from './styles'

import Container from '../Container'

const Product = () => {
  return (
    <ProductContainer>
      <Image>
        <img src="/assets/img/product.jpg" alt="Notebook" />
      </Image>
      <Details>
        <Container>
          <Title>Product Title</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias nesciunt. Blanditiis quaerat
            facilis est ad illo.
          </Description>
        </Container>
        <Container display="flex" justifyContent="space-between">
          <Price>
            <strong>$100</strong>
            <sup>$150</sup>
          </Price>
          <Cart>add to cart +</Cart>
        </Container>
      </Details>
    </ProductContainer>
  )
}

export default Product
