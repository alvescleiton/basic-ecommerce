import React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'

import Container from '@/Components/Container'
import ProductList from '@/Components/Product/ProductList'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Dev Store</title>
      </Head>

      <ProductList />
    </Container>
  )
}

export default Home
