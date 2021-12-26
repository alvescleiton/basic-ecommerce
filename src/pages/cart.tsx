import { NextPage } from 'next'
import Head from 'next/head'

import CartList from '@/Components/CartItem/CartList'
import Container from '@/Components/Container'

const Cart: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Cart | Dev Store</title>
      </Head>

      <CartList />
    </Container>
  )
}

export default Cart
