import { useContext, useEffect, useState } from 'react'

import { CartContext } from '@/Hooks/CartHooks'

import { Cart, Description, Details, Image, Price, ProductContainer, Title } from './styles'

import Container from '../Container'

export type ProductType = {
  id: number
  image: string
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
  const { addProduct, products } = useContext(CartContext)

  const addToCart = () => {
    addProduct(product)
  }

  useEffect(() => {
    products.some(p => p.id === product.id) && setAdded(true)
  }, [products])

  return (
    <ProductContainer>
      <Image>
        <img src={product.image} alt={product.title} />
      </Image>
      <Details>
        <Container>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
        </Container>
        <Container display="flex" justifyContent="space-between">
          <Price>
            {product.priceDiscount ? (
              <>
                <strong>${product.priceDiscount.toLocaleString('en-US')}</strong>
                <sup>${product.price.toLocaleString('en-US')}</sup>
              </>
            ) : (
              <strong>${product.price.toLocaleString('en-US')}</strong>
            )}
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
