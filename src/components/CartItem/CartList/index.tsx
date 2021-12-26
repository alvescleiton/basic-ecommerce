import CartItem from '@/Components/CartItem'

import { Table } from './styles'

const CartList = () => {
  return (
    <Table>
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
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <tr>
          <td colSpan={6} align="right">
            Total: <strong>$15,000</strong>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CartList
