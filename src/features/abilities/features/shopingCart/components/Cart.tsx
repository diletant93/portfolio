import { useSelector } from "react-redux";
import { selectItems } from "../cartSlice/selectors";
import AnimalCartItem from "./AnimalCartItem";

export default function Cart() {
    const items = useSelector(selectItems)
    console.log('items:',items)
    return (
        <div className="[direction:ltr] pl-4">
            {items.map(item => <AnimalCartItem key={item.animal.name} animalItem={item}/>)}
        </div>
    );
}
