import { createContext, useContext, useState } from 'react'

import { ProductType } from '@/Components/ProductItem'

export type CartProductsType = {
  id: number
  image: string
  title: string
  price: number
  priceDiscount?: number
  quantity: number
}

type CreateContextType = {
  products: CartProductsType[]
  addProduct: (product: ProductType) => void
  removeProduct: (id: number) => void
}

type CartContextType = {
  children: React.ReactNode
}

const CartContext = createContext<CreateContextType>({} as CreateContextType)

export const CartProvider = ({ children }: CartContextType) => {
  const [products, setProducts] = useState([])

  const addProduct = (product: ProductType) => {
    const obj = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      priceDiscount: product.priceDiscount,
      quantity: 1,
    }

    const productExists = products.find(p => p.id === product.id)

    if (productExists) return false

    setProducts([...products, obj])
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return <CartContext.Provider value={{ products, addProduct, removeProduct }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  const { products, addProduct, removeProduct } = context
  return { products, addProduct, removeProduct }
}
