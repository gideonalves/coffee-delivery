import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  border: 1px solid red;

  background: ${(props) => props.theme['white-300']};

  display: flex;
  flex-direction: column;
`
