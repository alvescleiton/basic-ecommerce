import { ContainerCartItem, ProductImage, Title, Quantity, Price, Remove } from './styles'

const CartItem = () => {
  const handleRemoveButton = () => {
    console.log('remove')
  }

  return (
    <ContainerCartItem>
      <ProductImage>
        <img src="/assets/img/product.jpg" alt="Product" />
      </ProductImage>
      <Title>Notebook 1</Title>
      <Quantity>1</Quantity>
      <Price>$5,000</Price>
      <Remove>
        <button onClick={handleRemoveButton}>X</button>
      </Remove>
    </ContainerCartItem>
  )
}

export default CartItem
