import { styled } from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme["base-hover"]};
  padding-bottom: 1rem;

  > img {
    max-width: 70px;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  h1 {
    color: ${(props) => props.theme["base-subtitle"]};

    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
  }

  > span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Counter = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 0.5rem;

  > span {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    transition: transform ease 250ms;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
      transform: scale(115%);
    }
  }
`;

const ICON_COLORS = {
  yellow: "yellow",
  purple: "purple",
};

interface IconLabelProps {
  variant: keyof typeof ICON_COLORS;
}

export const IconLabel = styled.span<IconLabelProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 8px;
  color: ${(props) => props.theme[ICON_COLORS[props.variant]]};

  > span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 160%;
  }
`;

export const TrashButton = styled.button`
  cursor: pointer;
  border: none;

  border: 1px solid transparent;
  border-radius: 8px;

  &:hover {
    border: 1px solid ${(props) => props.theme["purple-dark"]};
  }
`;
