import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons.jsx";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFoods</h1>
      </div>
      <nav>
        <Buttons textOnly>Cart ({totalCartItems})</Buttons>
      </nav>
    </header>
  );
}
