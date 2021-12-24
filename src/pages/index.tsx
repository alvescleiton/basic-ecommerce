import React from 'react'

import { NextPage } from 'next'

import Container from '@/Components/Container'
import ProductList from '@/Components/Product/ProductList'

const Home: NextPage = () => {
  return (
    <Container>
      <ProductList />
    </Container>
  )
}

export default Home
