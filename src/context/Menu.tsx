import { createContext, useContext, useState } from "react";

import espressoImage from "../assets/Type=Expresso.png";
import americanEspresso from "../assets/Type=Americano.png";
import creamyEspresso from "../assets/Type=Expresso Cremoso.png";
import icedEspresso from "../assets/Type=Café Gelado.png";
import milkEspresso from "../assets/Type=Café com Leite.png";
import latte from "../assets/Type=Latte.png";
import cappuccino from "../assets/Type=Capuccino.png";
import macchiato from "../assets/Type=Macchiato.png";

import { v4 as uuidv4 } from "uuid";

interface MenuContextProviderProps {
  children: React.ReactNode;
}

interface Menu {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

interface MenuContextType {
  menu: Menu[];
}

export const MenuContext = createContext({} as MenuContextType);

export function useMenuContext() {
  const context = useContext(MenuContext);
  return context;
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [menu, setMenu] = useState<Menu[]>([
    {
      id: uuidv4(),
      title: "Espresso",
      description: "Traditional coffee made with hot water and ground beans",
      image: espressoImage,
      price: 9.9,
      tags: ["Traditional"],
    },
    {
      id: uuidv4(),
      title: "American Espresso",
      description: "Traditional coffee made with hot water and ground beans",
      image: americanEspresso,
      price: 9.9,
      tags: ["Traditional"],
    },
    {
      id: uuidv4(),
      title: "Creamy Espresso",
      description: "Traditional espresso with creamy foam",
      image: creamyEspresso,
      price: 9.9,
      tags: ["Traditional"],
    },
    {
      id: uuidv4(),
      title: "Iced Espresso",
      description: "Drink prepared with espresso coffee and ice cubes",
      image: icedEspresso,
      price: 9.9,
      tags: ["Traditional", "Iced"],
    },
    {
      id: uuidv4(),
      title: "Coffee with Milk",
      description: "Half and half traditional espresso with steamed milk",
      image: milkEspresso,
      price: 9.9,
      tags: ["Traditional", "With Milk"],
    },
    {
      id: uuidv4(),
      title: "Latte",
      description: "A shot of espresso with twice as much milk and creamy foam",
      image: latte,
      price: 9.9,
      tags: ["Traditional", "With Milk"],
    },
    {
      id: uuidv4(),
      title: "Capuccino",
      description:
        "Cinnamon drink made from equal doses of coffee, milk and foam",
      image: cappuccino,
      price: 9.9,
      tags: ["Traditional", "With Milk"],
    },
    {
      id: uuidv4(),
      title: "Macchiato",
      description: "Espresso coffee mixed with a little hot milk and foam",
      image: macchiato,
      price: 9.9,
      tags: ["Traditional", "With Milk"],
    },
  ]);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
}
