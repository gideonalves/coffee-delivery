import styled from "styled-components";

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 768px) { 
    .container {
      width: 100%; 
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 100%;
      max-width: 70rem;
      margin-right: auto;
      margin-left: auto; 
    }
  }

`;

