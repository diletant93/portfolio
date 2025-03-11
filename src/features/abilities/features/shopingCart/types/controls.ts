export type Controllable = {
    id:string | number;
    quantity?:number;
}
export type ControlsProps<T extends Controllable> ={
    item:T;
    onIncrease:(item:T) => void;
    onDecrease:(item:T) => void;
    onSetQuantity:(item:T, quantity:number) => void,
    min?:number;
    max?:number;
}