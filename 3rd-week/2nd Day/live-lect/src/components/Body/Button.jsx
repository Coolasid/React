import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

export const Button = () => {
    const {theme,handleTheme} = useContext(ThemeContext)
    const { handleCart } = useContext(CartContext);
  return (
    <div>
      <button
        onClick={() => {
          handleCart(1);
        }}
      >
        Add to Cart
      </button>
      <button onClick={() => {
          handleTheme("dark")
          console.log(theme);
      }}>Change Theme</button>
    </div>
  );
};
