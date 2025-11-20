import Modal from "./UI/Modal.jsx";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import Buttons from "./UI/Buttons.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" id="name" type="text" />
        <Input label="E-Mail Address" id="email" type="email" />
        <Input label="Street Address" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>

        <p className="modal-actions">
          <Buttons type="button" textOnly onClick={handleClose}>
            Close
          </Buttons>
          <Buttons>Submit Order</Buttons>
        </p>
      </form>
    </Modal>
  );
}
