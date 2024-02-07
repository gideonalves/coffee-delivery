import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['gray-400']};
  border-radius: 6px;

  display: flex;
  gap: 4px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    border: none;
  }

  button svg {
    color: ${({ theme }) => theme.colors['purple-500']};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-700']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['gray-900']};
  }
`
