import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors['gray-200']};
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  width: 256px;
  height: 310px;

  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px 36px;

  & img {
    margin-top: -1.5rem;
  }
`

export const Tags = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;
  span {
    padding: 4px 8px;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors['yellow-300']};
    color: ${({ theme }) => theme.colors['yellow-700']};
    font-size: ${({ theme }) => theme.fonts.sizes.Tag};
  }
`
export const Title = styled.h3`
  margin-top: 16px;
  font-size: ${({ theme }) => theme.fonts.sizes.TitleLL};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  color: ${({ theme }) => theme.colors['gray-800']};
`

export const Description = styled.div`
  margin: 8px 0 32px;
  font-size: ${({ theme }) => theme.fonts.sizes.TitleSS};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  color: ${({ theme }) => theme.colors['gray-600']};
`

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Price = styled.div`
  margin-right: 16px;
  span:first-child {
    color: ${({ theme }) => theme.colors['gray-700']};
    font-size: ${({ theme }) => theme.fonts.sizes.TitleSS};
  }

  span:last-child {
    color: ${({ theme }) => theme.colors['gray-700']};
    font-size: ${({ theme }) => theme.fonts.sizes.TitleM};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > button {
    background-color: ${({ theme }) => theme.colors['purple-700']};
    border: none;
    border-radius: 5px;
    margin-left: 0.8rem;
    width: 3.2rem;
    height: 3.2rem;
    transition: 0.25s;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors['purple-500']};
    }

    &:disabled {
      cursor: not-allowed;
    }

    & > button svg {
      border-radius: 5px;
      color: white;
      font-size: 2rem;
    }
  }
`
