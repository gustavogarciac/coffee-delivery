import { createContext, useContext, useState, useEffect } from "react";
import { NewCheckOutOrderType } from "../pages/Checkout";

interface OrderContextProviderProps {
  children: React.ReactNode;
}

interface OrderContextType {
  cart: CartItem[];
  order: NewCheckOutOrderType;
  createNewOrder: (data: NewCheckOutOrderType) => void;
  addProductToCart: (data: CartItem) => void;
  removeProductFromCart: (productToBeDeletedId: string) => void;
}

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  quantity: number;
}

export const OrderContext = createContext({} as OrderContextType);

export function useOrderContext() {
  const context = useContext(OrderContext);
  return context;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [order, setOrder] = useState({} as NewCheckOutOrderType);
  function addProductToCart(data: CartItem) {
    const productAlreadyInCart = cart.filter((item) => item.id === data.id);
    console.log(productAlreadyInCart);
    if (productAlreadyInCart.length > 0) {
      return alert("This product is already in your cart.");
    }
    const order = {
      ...data,
    };
    setCart((prevState) => [...prevState, order]);
    const currentCart = [...cart, order];
    localStorage.setItem("@coffee-delivery:cart", JSON.stringify(currentCart));
  }

  function removeProductFromCart(productToBeDeletedId: string) {
    const newCartItemsArray = cart.filter(
      (item) => item.id !== productToBeDeletedId
    );
    setCart(newCartItemsArray);
    localStorage.setItem(
      "@coffee-delivery:cart",
      JSON.stringify(newCartItemsArray)
    );
  }

  function createNewOrder(data: NewCheckOutOrderType) {
    setOrder(data);
  }

  useEffect(() => {
    let currentCart = localStorage.getItem("@coffee-delivery:cart");
    if (currentCart !== null && JSON.parse(currentCart).length !== 0) {
      setCart(JSON.parse(currentCart));
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        cart,
        order,
        createNewOrder,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
