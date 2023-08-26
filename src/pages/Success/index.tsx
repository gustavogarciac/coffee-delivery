import { InfoContainer, OrderInfo, SuccessContainer } from "./styles";
import illustration from "../../assets/success.svg";
import { useOrderContext } from "../../context/Order";
import { IconLabel } from "./styles";
import { Banknote, MapPin, Watch } from "lucide-react";

export function Success() {
  const { order } = useOrderContext();

  return (
    <SuccessContainer>
      <div>
        <h1>Your order has been confirmed!</h1>
        <p>Soon your coffee will be arriving at your address</p>

        <OrderInfo>
          <InfoContainer>
            <IconLabel variant="purple">
              <MapPin />
            </IconLabel>
            <div>
              <span>
                Delivery{" "}
                <strong>
                  {order.street}, {order.number}.
                </strong>
              </span>
              <span>
                {order.neighborhood}, {order.city} - {order.uf}.
              </span>
            </div>
          </InfoContainer>
          <InfoContainer>
            <IconLabel variant="yellow">
              <Watch />
            </IconLabel>
            <div>
              <span>Delivery time</span>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoContainer>
          <InfoContainer>
            <IconLabel variant="orange">
              <Banknote />
            </IconLabel>
            <div>
              <span>Payment method</span>
              <strong>
                {order.paymentMethod === "cc" && "Credit Card"}
                {order.paymentMethod === "pix" && "Pix"}
                {order.paymentMethod === "cash" && "Cash"}
              </strong>
            </div>
          </InfoContainer>
        </OrderInfo>
      </div>
      <img src={illustration} alt="Delivery Man riding a purple motorcycle" />
    </SuccessContainer>
  );
}
