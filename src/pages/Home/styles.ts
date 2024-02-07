import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const HomeInfo = styled.div`
  max-width: 36.75rem;
  width: 100%;

  & > div:first-child {
    display: flex;
    width: 100%;
    flex-direction: column;

    & > h1 {
      color: ${({ theme }) => theme.colors['gray-900']};
      font-size: ${({ theme }) => theme.fonts.sizes.TitleXL};
      width: 100%;
      line-height: 130%;

      @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.fonts.sizes.TitleM};
      }
    }

    & > p {
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors['gray-800']};
      font-size: ${({ theme }) => theme.fonts.sizes.TitleS};
    }
  }

  @media (max-width: 1215px) {
    width: 80%;
    text-align: center;
  }
`

export const Advantages = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & > div {
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    min-width: 290px;

    & > span {
      color: ${({ theme }) => theme.colors['gray-700']};
      margin-left: 1rem;
    }
    & > svg {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-700']};
      border-radius: 50%;
      font-size: 2.8rem;
      padding: 0.5rem;
    }
  }

  & div:nth-child(2) svg {
    background-color: ${({ theme }) => theme.colors['gray-700']};
  }
  & div:nth-child(3) svg {
    background-color: ${({ theme }) => theme.colors['yellow-500']};
  }

  & div:nth-child(4) svg {
    background-color: ${({ theme }) => theme.colors['purple-500']};
  }
`

export const CoffeeSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    h2 {
      display: flex;
      justify-content: center;
    }
  }
`
