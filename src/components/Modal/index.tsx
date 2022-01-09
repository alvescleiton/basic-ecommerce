import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

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
    process.browser &&
    isOpen &&
    ReactDOM.createPortal(
      <S.Background isOpen={isOpen}>
        <S.Container ref={refModal}>{children}</S.Container>
      </S.Background>,
      document.getElementById('modal') as HTMLElement
    )
  )
}

export default Modal
