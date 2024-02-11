import { ShoppingCart } from 'phosphor-react'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  CoffeeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s2.glbimg.com/pGTd3kAbZCgJBM4vEDJmVD806Xo=/e.glbimg.com/og/ed/f/original/2015/03/03/cafezinho.jpg"
        alt=""
      />

      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos.
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
