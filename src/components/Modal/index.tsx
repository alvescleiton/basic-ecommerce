import { useEffect, useRef } from 'react'

import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  const refModal = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && refModal.current && !refModal.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <S.Background isOpen={isOpen}>
      <S.Container ref={refModal}>{children}</S.Container>
    </S.Background>
  )
}

export default Modal
