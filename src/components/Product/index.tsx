import React from 'react'

import { Cart, Description, Details, Image, Price, ProductContainer, Title } from './styles'

import Container from '../Container'

type ProductType = {
  id: number
  title: string
  description: string
  price: number
  priceDiscount: number
}

type PropsType = {
  product: ProductType
}

const Product = ({ product }: PropsType) => {
  return (
    <ProductContainer>
      <Image>
        <img src="/assets/img/product.jpg" alt={product.title} />
      </Image>
      <Details>
        <Container>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
        </Container>
        <Container display="flex" justifyContent="space-between">
          <Price>
            <strong>${product.price.toLocaleString('en-US')}</strong>
            {product.priceDiscount > 0 && <sup>${product.priceDiscount.toLocaleString('en-US')}</sup>}
          </Price>
          <Cart>add to cart +</Cart>
        </Container>
      </Details>
    </ProductContainer>
  )
}

export default Product
