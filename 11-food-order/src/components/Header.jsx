import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons.jsx";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFoods</h1>
      </div>
      <nav>
        <Buttons textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Buttons>
      </nav>
    </header>
  );
}
