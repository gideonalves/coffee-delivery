import styled from'styled-components';

export const HistoryContainer = styled.section`
    min-height: 90vh;

    & h3 {
        color: ${({ theme }) => theme.colors["base-text"]};
        font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
    } 

    & h2 {
    margin-top: 10rem;
  }
` 

export const NoCompleteOrderMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30rem;
  text-align: center;

  & h2 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
  }
`;