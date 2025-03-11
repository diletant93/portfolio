import { Animal } from "../../filter/types/animal";

export type CartItem = {
    animal:Animal;
    quantity:number;
}
export type CartState = {
    status: 'loading' | 'error' | 'success';
    error:string;
    items:CartItem[]
}