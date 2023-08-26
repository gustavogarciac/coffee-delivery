import {
  AddressInput,
  CartEmptyMessage,
  CartItemsContainer,
  CheckoutContainer,
  CheckoutSidebar,
  ConfirmOrderButton,
  FieldsetContainer,
  FormContainer,
  InputGroup,
  InputWrapper,
  Legend,
  PriceContainer,
  Select,
  TotalPrice,
} from "./styles";

import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleDollarSign, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../context/Order";
import { CheckoutItem } from "../../components/CheckoutItem";
import { IconLabel } from "../../components/IconLabel";
import { v4 as uuidv4 } from "uuid";

export type NewCheckOutOrderType = zod.infer<
  typeof newCheckoutOrderValidationSchema
>;

const newCheckoutOrderValidationSchema = zod.object({
  cep: zod.string().min(8, "Please, digit a valid CEP."),
  street: zod.string().min(2, "Enter a valid street."),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(2).max(2),
  paymentMethod: zod.enum(["cc", "pix", "cash"]),
});

export function Checkout() {
  const { cart, createNewOrder } = useOrderContext();
  const newCheckoutForm = useForm<NewCheckOutOrderType>({
    resolver: zodResolver(newCheckoutOrderValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      city: "",
      uf: "",
      complement: "",
      neighborhood: "",
      number: "",
      paymentMethod: "cash",
    },
  });

  const { register, handleSubmit } = newCheckoutForm;
  const navigate = useNavigate();

  const totalPrice = cart
    .map((item) => {
      const multiplicatedPrice = item.quantity * item.price;
      return multiplicatedPrice;
    })
    .reduce((acc, item) => acc + item, 0);
  function handleFinishOrder(data: NewCheckOutOrderType) {
    createNewOrder(data);
    navigate(`/success/${uuidv4()}`);
  }

  return (
    <CheckoutContainer>
      <FormContainer>
        <h1>Complete your order</h1>
        <form
          action=""
          onSubmit={handleSubmit(handleFinishOrder, () =>
            alert("Preencha corretamente todos os campos!")
          )}
          id="checkout-form"
        >
          <FieldsetContainer>
            <Legend>
              <IconLabel variant="yellow" icon={<MapPin />} />
              <div>
                <h2>Delivery Adress</h2>
                <p>Let us know where you want to receive your coffee.</p>
              </div>
            </Legend>

            <InputGroup>
              <AddressInput placeholder="CEP" {...register("cep")} />
              <AddressInput placeholder="Street" {...register("street")} />
              <InputWrapper>
                <AddressInput placeholder="Number" {...register("number")} />
                <AddressInput
                  placeholder="Complement"
                  {...register("complement")}
                />
              </InputWrapper>
              <InputWrapper>
                <AddressInput
                  placeholder="Neighborhood"
                  {...register("neighborhood")}
                />
                <AddressInput placeholder="City" {...register("city")} />
                <AddressInput placeholder="UF" {...register("uf")} />
              </InputWrapper>
            </InputGroup>
          </FieldsetContainer>

          <FieldsetContainer>
            <Legend>
              <IconLabel icon={<CircleDollarSign />} variant="purple" />
              <div>
                <h2>Payment</h2>
                <p>
                  Payment is made on delivery. Choose the way you want to pay
                </p>
              </div>
            </Legend>

            <Select {...register("paymentMethod")} defaultValue={"cash"}>
              <option value="cc">CREDIT CARD</option>
              <option value="pix">PIX</option>
              <option value="cash">CASH</option>
            </Select>
          </FieldsetContainer>
        </form>
      </FormContainer>
      <CheckoutSidebar>
        <h1>Selected products</h1>
        <CartItemsContainer>
          {cart.length !== 0 ? (
            cart.map((item) => <CheckoutItem key={item.id} data={item} />)
          ) : (
            <CartEmptyMessage>
              There are no items in your cart.
            </CartEmptyMessage>
          )}
        </CartItemsContainer>
        <footer>
          {cart.length !== 0 ? (
            <PriceContainer>
              <div>
                <span>Total from items</span>
                <span>$ {totalPrice.toFixed(1)}</span>
              </div>
              <div>
                <span>Delivery Tax</span>
                <span>$ 3.5</span>
              </div>
              <div>
                <TotalPrice>Total</TotalPrice>
                <TotalPrice>$ {(totalPrice + 3.5).toFixed(1)}</TotalPrice>
              </div>
            </PriceContainer>
          ) : (
            ""
          )}

          <ConfirmOrderButton
            disabled={cart.length === 0}
            title={
              cart.length === 0
                ? "Add one product before finishing the order."
                : "Finish the order"
            }
            type="submit"
            form="checkout-form"
          >
            confirm order
          </ConfirmOrderButton>
        </footer>
      </CheckoutSidebar>
    </CheckoutContainer>
  );
}
