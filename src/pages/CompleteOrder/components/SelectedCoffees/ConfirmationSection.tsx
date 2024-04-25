import { ConfirmationSectionContainer } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  console.log(cartItemsTotal);
  
  const cartTotal = cartItemsTotal === 0 ? 0 : DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal); // 0,00
  // console.log(formattedItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal); // 3,50 
  // console.log(formattedCartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE); // 3,50
  // console.log(formattedDeliveryPrice);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
     
            <RegularText>R$ {cartItemsTotal > 0 ? formattedDeliveryPrice : formatMoney(0) }</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
  
}
