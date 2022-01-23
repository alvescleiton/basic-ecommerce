import { CartProductsType, useCart } from '@/Hooks/CartHooks'

import * as S from './styles'

type Props = {
  product: CartProductsType
}

const CartItem = ({ product }: Props) => {
  const { removeProduct } = useCart()

  const handleRemoveButton = () => {
    removeProduct(product.id)
  }

  return (
    <S.Container>
      <S.ProductImage>
        <img src={product.image} alt={product.title} />
      </S.ProductImage>
      <S.Title>{product.title}</S.Title>
      <S.Quantity>{product.quantity}</S.Quantity>
      <S.Price>
        ${product.priceFull > 0 ? product.priceFull.toLocaleString('en-US') : product.price.toLocaleString('en-US')}
      </S.Price>
      <S.Remove>
        <button onClick={handleRemoveButton}>X</button>
      </S.Remove>
    </S.Container>
  )
}

export default CartItem
