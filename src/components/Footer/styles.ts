import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  height: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    font-size: 3rem;
    margin: 3rem;
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  a:hover {
    transform: scale(2.05);
    transition: transform 0.2s linear;
  }
` 