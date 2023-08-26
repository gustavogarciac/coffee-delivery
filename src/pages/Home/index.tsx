import { ShoppingCart, BoxIcon, WatchIcon, Coffee } from "lucide-react";
import {
  HeroContainer,
  HeroTextContainer,
  HomeContainer,
  IconLabel,
  IconsContainer,
  MenuContainer,
  MenuListContainer,
} from "./styles";

import heroImage from "../../assets/hero-image.png";
import { useMenuContext } from "../../context/Menu";
import { MenuItem } from "../../components/MenuItem";

export function Home() {
  const { menu } = useMenuContext();
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroTextContainer>
          <h1>Find the perfect coffee for any time of day</h1>
          <p>
            With Coffee Delivery you get your coffee wherever you are, at any
            time.
          </p>

          <IconsContainer>
            <div>
              <IconLabel variant="orange">
                <ShoppingCart />
              </IconLabel>
              <span>Easy and safe to buy</span>
            </div>
            <div>
              <IconLabel variant="yellow">
                <BoxIcon />
              </IconLabel>
              <span>Package keeps the coffee warm</span>
            </div>
            <div>
              <IconLabel variant="gray">
                <WatchIcon />
              </IconLabel>
              <span>Fast and tracked delivery</span>
            </div>
            <div>
              <IconLabel variant="purple">
                <Coffee />
              </IconLabel>
              <span>Get a fresh coffee easy right now!</span>
            </div>
          </IconsContainer>
        </HeroTextContainer>
        <img src={heroImage} />
      </HeroContainer>
      <MenuContainer>
        <h1>Our menu</h1>
        <MenuListContainer>
          {menu && menu.map((item) => <MenuItem key={item.id} data={item} />)}
        </MenuListContainer>
      </MenuContainer>
    </HomeContainer>
  );
}
