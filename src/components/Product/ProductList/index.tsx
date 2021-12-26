import { useEffect, useState } from 'react'

import Product from '..'

import ProductData from '@/Services/productList.json'

import { ContainerProductList } from './styles'

type ProductListProps = {
  id: number
  title: string
  description: string
  price: number
  priceDiscount: number
}

const ProductList = () => {
  const [productList, setProductList] = useState<ProductListProps[]>([])

  useEffect(() => {
    setProductList(ProductData)
  }, [])

  return (
    <ContainerProductList>
      {productList?.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ContainerProductList>
  )
}

export default ProductList
