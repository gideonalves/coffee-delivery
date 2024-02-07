import { useContext, useState } from 'react'
import { QuantityInput } from '../Form/QuantiTyInput'

import {
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { CartContext, CartContextValue } from '../../Contexts/CoffeesContext'

export interface Props {
  quantity: number
  id: string
  image: string
  tags?: string[]
  title: string
  description?: string
  price: number
}

export function CoffeeCard({
  id,
  image,
  tags,
  title,
  description,
  price,
}: Props) {
  const value = useContext(CartContext)

  const { addToCart } = value as CartContextValue

  const [quantity, setQuantity] = useState(0)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  const isCoffeeSelected = quantity > 0
  const buttonAddToCartIsDisabled = !isCoffeeSelected

  return (
    <Container>
      <img src={image} alt={title} />
      <Tags>
        <span>{tags}</span>
      </Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button
            onClick={() => addToCart({ id, image, title, price, quantity })}
            disabled={buttonAddToCartIsDisabled}
            title={
              buttonAddToCartIsDisabled
                ? 'Selecione uma quantidade para adicionar ao carrinho'
                : 'Adicionar ao carrinho'
            }
          >
            <ShoppingCart size={22} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
