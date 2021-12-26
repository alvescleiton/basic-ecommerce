import { useContext, useState } from 'react'

import { CartContext } from '@/Hooks/CartHooks'

import { Cart, Description, Details, Image, Price, ProductContainer, Title } from './styles'

import Container from '../Container'

export type ProductType = {
  id: number
  title: string
  description: string
  price: number
  priceDiscount: number
}

type PropsType = {
  product: ProductType
}

const ProductItem = ({ product }: PropsType) => {
  const [added, setAdded] = useState(false)
  const { addProduct } = useContext(CartContext)

  const addToCart = () => {
    addProduct(product)
    setAdded(true)
  }

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
          <Cart onClick={addToCart} added={added}>
            {added ? 'in the cart' : 'add to cart +'}
          </Cart>
        </Container>
      </Details>
    </ProductContainer>
  )
}

export default ProductItem
