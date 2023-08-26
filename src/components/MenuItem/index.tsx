import { Minus, Plus, ShoppingCart } from "lucide-react";
import {
  CartButton,
  Counter,
  LabelContainer,
  MenuItemContainer,
  PriceLabel,
  TextContainer,
} from "./styles";
import { useState } from "react";
import { useOrderContext } from "../../context/Order";

interface DataProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

interface MenuItemProps {
  data: DataProps;
}

export function MenuItem({ data }: MenuItemProps) {
  const [quantity, setQuantity] = useState(0);
  const { addProductToCart } = useOrderContext();

  function handleMinusQuantity() {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  }

  function handleSumQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleAddProductToCart() {
    if (quantity === 0) {
      alert("Selecione, no mínimo, uma unidade.");
    }
    addProductToCart({
      ...data,
      quantity,
    });
  }

  return (
    <MenuItemContainer>
      <img src={data.image} />

      <TextContainer>
        <LabelContainer>
          {data.tags.map((tag) => (
            <span key={`menu-item-${tag}`}>{tag}</span>
          ))}
        </LabelContainer>

        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </TextContainer>

      <footer>
        <PriceLabel>
          <span>R$</span>
          <strong>{data.price}</strong>
        </PriceLabel>

        <Counter>
          <span>
            <Minus onClick={handleMinusQuantity} />
          </span>
          <strong>{quantity}</strong>
          <span>
            <Plus onClick={handleSumQuantity} />
          </span>
        </Counter>

        <CartButton>
          <ShoppingCart onClick={handleAddProductToCart} />
        </CartButton>
      </footer>
    </MenuItemContainer>
  );
}
