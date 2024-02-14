import { MapPin, CurrencyDollar } from 'phosphor-react'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { ComplenteOrderFormContainer, FormSectionContainer } from './styles'
import { useTheme } from 'styled-components'
import { AddressForm } from './AdrdressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CompleteOrderForm() {
  const { colors } = useTheme()
  return (
    <ComplenteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPin color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento pode ser feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </ComplenteOrderFormContainer>
  )
}
