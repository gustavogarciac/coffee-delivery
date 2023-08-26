import { styled } from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;
  margin-top: 3rem;

  > div {
    flex: 1;
    h1 {
      color: ${(props) => props.theme["yellow-dark"]};

      font-family: "Baloo 2", cursive;
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    > img {
      width: 100%;
    }
  }
`;

const ICON_COLORS = {
  purple: "purple",
  yellow: "yellow",
  orange: "yellow-dark",
};

interface IconLabelProps {
  variant: keyof typeof ICON_COLORS;
}

export const IconLabel = styled.span<IconLabelProps>`
  border-radius: 9999px;
  background-color: ${(props) => props.theme[ICON_COLORS[props.variant]]};
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
`;

export const OrderInfo = styled.div`
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 6px 36px;
  padding: 2.5rem;
  margin-top: 2rem;

  display: grid;
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;

    span {
      color: ${(props) => props.theme["base-text"]};

      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }
  }
`;
