import styled from 'styled-components'

export const FieldContainer = styled.div`
  display: grid;
  gap: 1rem;

  > div {
    display: grid;
    gap: 0.75rem;
  }

  > div:nth-child(1) {
    grid-template-columns: 12.5rem;

    gap: 1rem;
  }

  > div:nth-child(2) {
    grid-template-columns: auto;
  }

  > div:nth-child(3) {
    grid-template-columns: 12.5rem auto;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  > div:nth-child(4) {
    grid-template-columns: 12.5rem auto 5rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.sizes.TitleSS};

  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;

  background: ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme.colors['gray-700']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-600']};
  }
`
