import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

import {
  HeaderContainer,
  HeaderButtonsContainer,
  HeaderButton,
  Location,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Buttons'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logo}
          alt="Imagem de um copo de café roxo com um simbolo de um foguete e ao lado escrito Coffee Delivery"
          width={84}
          height={40}
        />
      </NavLink>

      <HeaderButtonsContainer>
        <Location>
          <MapPin size={20} weight="fill" />
          São Paulo, SP
        </Location>
        <NavLink to="/Checkout">
          <HeaderButton>
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
