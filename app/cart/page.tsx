import Container from "../components/Container";
import CartClient from "./CartClient";

const Cart = () => {
  return (
    <div className="mt-6">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
};

export default Cart;
