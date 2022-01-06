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
        <img src={product.image} alt={product.title} />
      </ProductImage>
      <Title>{product.title}</Title>
      <Quantity>{product.quantity}</Quantity>
      <Price>
        $
        {product.priceDiscount > 0
          ? product.priceDiscount.toLocaleString('en-US')
          : product.price.toLocaleString('en-US')}
      </Price>
      <Remove>
        <button onClick={handleRemoveButton}>X</button>
      </Remove>
    </ContainerCartItem>
  )
}

export default CartItem
