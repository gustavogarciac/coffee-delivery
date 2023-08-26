import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LocationLink = styled(NavLink)`
  padding: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
  border-radius: 8px;

  @media (max-width: 420px) {
    > span {
      display: none;
    }
  }
`;

export const CartButton = styled(NavLink)`
  position: relative;
  padding: 0.5rem;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 8px;
`;

export const CartLength = styled.span`
  position: absolute;
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.15rem 0.2rem;
  border-radius: 999px;
  top: -8px;
  right: -4px;
`;
