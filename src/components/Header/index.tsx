import {
  CartButton,
  CartLength,
  HeaderContainer,
  LocationLink,
  NavContainer,
} from "./styles";
import { MapPin, ShoppingCart } from "lucide-react";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useOrderContext } from "../../context/Order";

export function Header() {
  const { cart } = useOrderContext();
  const cartLength = cart.length;
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={logo} />
      </Link>

      <NavContainer>
        <LocationLink to={"/"}>
          <MapPin />
          <span>Porto Alegre, RS</span>
        </LocationLink>
        <CartButton to="/checkout">
          <ShoppingCart />
          {cartLength === 0 ? "" : <CartLength>{cartLength}</CartLength>}
        </CartButton>
      </NavContainer>
    </HeaderContainer>
  );
}
