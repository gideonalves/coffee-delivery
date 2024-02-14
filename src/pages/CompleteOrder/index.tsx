import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { ComplenteOrderContainer } from './styles'

export function CompleteOrderPage() {
  return (
    <ComplenteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </ComplenteOrderContainer>
  )
}
