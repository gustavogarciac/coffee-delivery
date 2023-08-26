import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding: 0 10rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 0 5rem;
  }
  @media (max-width: 650px) {
    padding: 0 2rem;
  }
`;
