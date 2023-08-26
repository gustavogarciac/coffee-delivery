import { createContext, useContext, useState } from "react";

import espressoImage from "../assets/Type=Expresso.png";
import americanEspresso from "../assets/Type=Americano.png";
import creamyEspresso from "../assets/Type=Expresso Cremoso.png";
import icedEspresso from "../assets/Type=Café Gelado.png";

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
  ]);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
}
