import { useContext } from 'react'

import { CartContext, CartProductsType } from '@/Hooks/CartHooks'

import { ContainerCartItem, ProductImage, Title, Quantity, Price, Remove } from './styles'

type Props = {
  product: CartProductsType
}

const CartItem = ({ product }: Props) => {
  const { removeProduct } = useContext(CartContext)

  const handleRemoveButton = () => {
    removeProduct(product.id)
  }

  return (
    <ContainerCartItem>
      <ProductImage>
        <img src="/assets/img/product.jpg" alt={product.title} />
      </ProductImage>
      <Title>{product.title}</Title>
      <Quantity>{product.quantity}</Quantity>
      <Price>
        R$
        {product.priceDiscount > 0
          ? product.priceDiscount.toLocaleString('pt-BR')
          : product.price.toLocaleString('pt-BR')}
      </Price>
      <Remove>
        <button onClick={handleRemoveButton}>X</button>
      </Remove>
    </ContainerCartItem>
  )
}

export default CartItem
