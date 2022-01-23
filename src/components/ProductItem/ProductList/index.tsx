import { useEffect, useState } from 'react'

import ProductItem from '..'

import ProductData from '@/Services/productList.json'

import * as S from './styles'

type ProductCompleteType = {
  id: number
  images: string[]
  title: string
  description: string
  stock: number
  price: number
  priceFull: number
}

type ProductListProps = {
  id: number
  image: string
  title: string
  description: string
  price: number
  priceFull: number
}

const ProductList = () => {
  const [productList, setProductList] = useState<ProductListProps[]>([])

  useEffect(() => {
    const product = ProductData.map((product: ProductCompleteType) => {
      return {
        id: product.id,
        image: product.images[0],
        title: product.title,
        description: product.description,
        price: product.price,
        priceFull: product.priceFull,
      }
    })

    setProductList(product)
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
