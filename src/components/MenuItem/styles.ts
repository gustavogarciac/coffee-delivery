import { styled } from "styled-components";

export const MenuItemContainer = styled.article`
  min-height: 21rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1rem;

  > img {
    width: 7.5rem;
    margin-top: -3rem;
  }

  > h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  > p {
    color: ${(props) => props.theme["base-label"]};
    text-align: center;

    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.82rem */
  }

  > footer {
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: space-around;

    @media (max-width: 1040px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;

  > span {
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
    border-radius: 8px;

    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.3rem */
    text-transform: uppercase;
  }
`;

export const PriceLabel = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: flex-end;
  > span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
  }

  > strong {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
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

export const CartButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 8px;
  width: 75px;
  height: 40px;

  &:hover {
    background-color: ${(props) => props?.theme["purple-dark"]};
  }
`;
