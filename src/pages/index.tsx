import React from 'react'

import { NextPage } from 'next'

import Container from '@/Components/Container'
import Product from '@/Components/Product'

const Home: NextPage = () => {
  return (
    <Container>
      <Product />
    </Container>
  )
}

export default Home
