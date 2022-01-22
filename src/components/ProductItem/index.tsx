import { useEffect, useState } from 'react'

import { useCart } from '@/Hooks/CartHooks'

import * as S from './styles'

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
  const { addProduct, products } = useCart()

  const addToCart = () => {
    addProduct(product)
  }

  useEffect(() => {
    products.some(p => p.id === product.id) && setAdded(true)
  }, [products])

  return (
    <S.ProductContainer>
      <S.Image>
        <img src={product.image} alt={product.title} />
      </S.Image>
      <S.Details>
        <Container>
          <S.Title>{product.title}</S.Title>
          <S.Description>
            {product.description.length > 120 ? `${product.description.substring(0, 120)}...` : product.description}
          </S.Description>
        </Container>
        <Container display="flex" justifyContent="space-between">
          <S.Price>
            {product.priceDiscount ? (
              <>
                <strong>${product.priceDiscount.toLocaleString('en-US')}</strong>
                <sup>${product.price.toLocaleString('en-US')}</sup>
              </>
            ) : (
              <strong>${product.price.toLocaleString('en-US')}</strong>
            )}
          </S.Price>
          <S.Cart onClick={addToCart} added={added}>
            {added ? 'in the cart' : 'add to cart +'}
          </S.Cart>
        </Container>
      </S.Details>
    </S.ProductContainer>
  )
}

export default ProductItem
