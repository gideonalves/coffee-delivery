import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CartEmptyMessage = styled.div`
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.25s;
    border: double 1px transparent;
    border-image-slice: 1;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 1.5rem;

    background-image: linear-gradient(
        ${({ theme }) => theme.colors['base-card']},
        ${({ theme }) => theme.colors['base-card']}
      ),
      radial-gradient(
        circle at top left,
        ${({ theme }) => theme.colors['brand-yellow-dark']},
        ${({ theme }) => theme.colors['brand-purple-dark']}
      );
    background-origin: border-box;
    background-clip: content-box, border-box;

   & h2 {
    font-weight: normal;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors['base-text']};
    margin-bottom: 1.5rem;
   }   

   & a {
    color: ${({ theme }) => theme.colors['brand-purple']};
    text-decoration: underline;
    font-size: 0.875rem;
    width: 90%;

    &:hover {
      color: ${({ theme }) => theme.colors['brand-purple-dark']};
    }
  }
`;
