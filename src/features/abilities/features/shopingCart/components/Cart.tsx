import { useSelector } from "react-redux";
import { selectItems } from "../cartSlice/selectors";
import AnimalCartItem from "./AnimalCartItem";

export default function Cart({isLoading}:{isLoading:boolean}) {
    const items = useSelector(selectItems);
    if(isLoading) return null
    if(items.length <= 0){
        return <div className="w-full h-full flex-center">The cart is empty</div>
    }
    return (
        <div className="[direction:ltr] pl-2">
            {items.map(item => <AnimalCartItem key={item.animal.name} animalItem={item} />)}
        </div>
    );
}
