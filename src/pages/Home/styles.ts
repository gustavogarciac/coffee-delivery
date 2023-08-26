import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  > img {
    max-width: 700px;

    @media (max-width: 1350px) {
      max-width: 60%;
    }
  }

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const HeroTextContainer = styled.div`
  max-width: 800px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  > p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const IconsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ICON_LABEL_COLORS = {
  orange: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
};

interface IconLabelProps {
  variant: keyof typeof ICON_LABEL_COLORS;
}

export const IconLabel = styled.span<IconLabelProps>`
  border-radius: 9999px;
  background-color: ${(props) => props.theme[ICON_LABEL_COLORS[props.variant]]};
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  > h1 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const MenuListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1450px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1040px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
