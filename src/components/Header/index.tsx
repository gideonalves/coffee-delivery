import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} alt="Coffee Delivery" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={28} weight="fill" />
            São Paulo, SP
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={28} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
