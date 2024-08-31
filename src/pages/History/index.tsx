import { HistoryContainer, NoCompleteOrderMessage } from "./styles"

export function HistoryPage() {
    return (
        <HistoryContainer>
            <NoCompleteOrderMessage>
                <h2>Você ainda não completou nenhum pedido!</h2>
            </NoCompleteOrderMessage>
        </HistoryContainer>
    )
  }