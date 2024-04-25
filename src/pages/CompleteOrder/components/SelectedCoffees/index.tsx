import { useCart } from "../../../../hooks/useCart";
import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { CartEmptyMessage, DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  const isCartEmpty = cartItems.length === 0;

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {isCartEmpty ? (
          <CartEmptyMessage>
            <h2>Carrinho vazio!</h2>
            <a href="/">Clique aqui para ver nosso catálogo de cafés!</a>
          </CartEmptyMessage>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CoffeeCartCard key={item.id} coffee={item} />
            ))}
          </div>
        )}


        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
