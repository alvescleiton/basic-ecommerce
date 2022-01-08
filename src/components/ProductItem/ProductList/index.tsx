import { useEffect, useState } from 'react'

import ProductItem from '..'

import ProductData from '@/Services/productList.json'

import * as S from './styles'

type ProductListProps = {
  id: number
  image: string
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
    <S.ContainerProductList>
      {productList?.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </S.ContainerProductList>
  )
}

export default ProductList
