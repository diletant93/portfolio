import { useSelector } from "react-redux";
import { selectItems } from "../cartSlice/selectors";

export default function CartTotal() {
  const cart = useSelector(selectItems)
  const totalItems = cart.reduce((acc, next) => acc += next.quantity, 0)
  if (totalItems <= 0) return <div>No items selected</div>
  return (
    <div >
      Items in the cart: {totalItems}
    </div>
  );
}
