import { useContext, useEffect, useState } from 'react'

import CartItem from '@/Components/CartItem'
import { CartContext } from '@/Hooks/CartHooks'

import * as S from './styles'

const CartList = () => {
  const { products } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      const price = product.priceDiscount ? product.priceDiscount : product.price

      return acc + price * product.quantity
    }, 0)

    setTotal(total)
  }, [products])

  if (!products.length) {
    return <S.NoItems>Your cart is empty</S.NoItems>
  }

  return (
    <S.Table>
      <thead>
        <tr>
          <th colSpan={2} align="left">
            Product
          </th>
          <th>Quantity</th>
          <th align="right">Price</th>
          <th align="center"></th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
        <tr>
          <td colSpan={6} align="right">
            Total: <strong>${total.toLocaleString('en-US')}</strong>
          </td>
        </tr>
      </tbody>
    </S.Table>
  )
}

export default CartList
