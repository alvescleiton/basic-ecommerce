import { useContext, useEffect, useState } from 'react'

import Router from 'next/router'

import Modal from '@/Components/Modal'
import { CartContext } from '@/Hooks/CartHooks'

import { CartContainer, NumberOfItems, EmptyCart } from './styles'

const MiniCart = () => {
  const { products } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)
  const [isAnimatin, setIsAnimatin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const qtd = products.reduce((acc, cur) => acc + cur.quantity, 0)

    setIsAnimatin(true)

    setQuantity(qtd)

    setTimeout(() => {
      setIsAnimatin(false)
    }, 1000)
  }, [products])

  return (
    <>
      <CartContainer isAnimating={isAnimatin} onClick={() => (quantity > 0 ? Router.push('cart') : setIsOpen(true))}>
        <NumberOfItems>{quantity}</NumberOfItems>

        <img src="/assets/img/cart.png" alt="Cart" />
      </CartContainer>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <EmptyCart>Your cart is empty =(</EmptyCart>
      </Modal>
    </>
  )
}

export default MiniCart
