import { useSelector } from "react-redux";
import { selectItems } from "../cartSlice/selectors";
import AnimalCartItem from "./AnimalCartItem";

export default function Cart() {
    const items = useSelector(selectItems)

    return (
        <div className="[direction:ltr] pl-2">
            {items.map(item => <AnimalCartItem key={item.animal.name} animalItem={item} />)}
        </div>
    );
}
