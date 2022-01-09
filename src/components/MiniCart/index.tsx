import { useEffect, useState } from 'react'

import Router from 'next/router'

import Modal from '@/Components/Modal'
import { useCart } from '@/Hooks/CartHooks'

import * as S from './styles'

const MiniCart = () => {
  const { products } = useCart()
  const [quantity, setQuantity] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const qtd = products.reduce((acc, cur) => acc + cur.quantity, 0)

    setIsAnimating(true)

    setQuantity(qtd)

    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }, [products])

  return (
    <>
      <S.Container isAnimating={isAnimating} onClick={() => (quantity > 0 ? Router.push('cart') : setIsOpen(true))}>
        <S.NumberOfItems>{quantity}</S.NumberOfItems>

        <img src="/assets/img/cart.png" alt="Cart" />
      </S.Container>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <S.EmptyCart>Your cart is empty =(</S.EmptyCart>
      </Modal>
    </>
  )
}

export default MiniCart
