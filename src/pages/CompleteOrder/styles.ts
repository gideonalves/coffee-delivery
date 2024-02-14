import styled from 'styled-components'

export const ComplenteOrderContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  /* border-radius: 6rem; */
  padding: 2.5rem;
`
