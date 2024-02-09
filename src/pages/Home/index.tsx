import { Intro } from './Components/Intro'
import { OurCoffees } from './Components/OurCoffees'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
