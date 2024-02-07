import { FieldContainer, Input } from './stylesd'

export function FormAddress() {
  return (
    <FieldContainer>
      <div>
        <Input type="text" placeholder="CEP" />
      </div>
      <div>
        <Input type="text" placeholder="Rua" />
      </div>
      <div>
        <Input type="text" placeholder="Número" />
        <Input type="text" placeholder="Complemento" />
      </div>
      <div>
        <Input type="text" placeholder="Bairro" />
        <Input type="text" placeholder="Cidade" />
        <Input type="text" placeholder="UF" />
      </div>
    </FieldContainer>
  )
}
