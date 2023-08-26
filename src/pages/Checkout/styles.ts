import { styled } from "styled-components";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};

  > h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const CheckoutSidebar = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  gap: 1.75rem;

  border-radius: 0.25rem 2.8rem;
  background: ${(props) => props.theme["base-card"]};

  > h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const FieldsetContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
`;

export const Legend = styled.legend`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 500;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.9rem;
    line-height: 130%;
  }
`;

const ICON_COLORS = {
  yellow: "yellow",
  purple: "purple",
};

interface IconLabelProps {
  iconcolor: keyof typeof ICON_COLORS;
}

export const IconLabel = styled.span<IconLabelProps>`
  color: ${(props) => props.theme[ICON_COLORS[props.iconcolor]]};
`;

export const AddressInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-hover"]};
  background: ${(props) => props.theme["base-input"]};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Select = styled.select`
  width: 50%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-hover"]};
  background: ${(props) => props.theme["base-input"]};
  margin-top: 1rem;
`;

export const CartItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 1rem;
  max-height: 312.5px;
  overflow-y: auto;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalPrice = styled.span`
  font-family: "Baloo 2", cursive;
  font-size: 1.5rem;
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  font-weight: 500;
  border: none;
  height: 50px;
  border-radius: 8px;

  transition: background 200ms ease;
  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const CartEmptyMessage = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", cursive;
  text-align: center;
  opacity: 0.5;
`;

// export const PaymentInputWrapper = styled.div`
//   display: flex;
//   padding: 1rem;
//   align-items: center;
//   gap: 1rem;
//   flex: 1;

//   border-radius: 6px;
//   background: ${(props) => props.theme["base-button"]};

//   > label {
//     display: flex;
//     align-items: center;
//     gap: 0.25rem;
//   }
// `;
