import { useState } from "react";
import { Plus, Minus, Trash } from "lucide-react";
import {
  Counter,
  CtaContainer,
  IconLabel,
  ItemContainer,
  TrashButton,
} from "./styles";
import { useOrderContext } from "../../context/Order";

interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  quantity: number;
}

interface DataProps {
  data: Item;
}

export function CheckoutItem({ data }: DataProps) {
  const [quantity, setQuantity] = useState(data.quantity);
  const { removeProductFromCart } = useOrderContext();
  function handleSumQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleMinusQuantity() {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  }

  function handleRemoveProductFromCart() {
    removeProductFromCart(data.id);
  }

  return (
    <ItemContainer>
      <img src={data.image} alt="" />
      <div>
        <h1>{data.title}</h1>
        <CtaContainer>
          <Counter>
            <span>
              <Minus onClick={handleMinusQuantity} />
            </span>
            <strong>{quantity}</strong>
            <span>
              <Plus onClick={handleSumQuantity} />
            </span>
          </Counter>
          <TrashButton onClick={handleRemoveProductFromCart}>
            <IconLabel variant="purple">
              <Trash />
              <span>Remover</span>
            </IconLabel>
          </TrashButton>
        </CtaContainer>
      </div>
      <span>R$ ${data.price}</span>
    </ItemContainer>
  );
}
