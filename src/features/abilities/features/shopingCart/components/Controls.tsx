import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controllable, ControlsProps } from "../types/controls";
import { ChangeEvent, useState } from "react";
import { clamp } from "@/utils/numberManipulations";

export default function Controls<T extends Controllable>({
    item,
    onIncrease,
    onDecrease,
    onSetQuantity,
    min = 0,
    max = Infinity }: ControlsProps<T>) {

    const [inputValue, setInputValue] = useState<string>(item.quantity?.toString() || '1')

    function handleBlur(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value === '' || +e.target.value < 0) {
            const defaultValue = min > 0 ? min : 1
            setInputValue(defaultValue.toString())
            onSetQuantity(item, defaultValue)
        } else {
            const inputValue = +e.target.value
            const clamped = clamp(inputValue, min, max)
            setInputValue(clamped.toString())
            onSetQuantity(item, clamped)
        }
    }

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
        if (e.target.value !== '' && +e.target.value > 0) {
            onSetQuantity(item, +e.target.value)
        }
    }

    function handleDecrease() {
        setInputValue(current => (Number(current) - 1).toString())
        onDecrease(item)
    }

    function handleIncrease() {
        setInputValue(current => (Number(current) + 1).toString())
        onIncrease(item)
    }

    if (!item.quantity) item.quantity = 1

    return (
        <div className="flex gap-2 items-center ">
            <Button className="shadcn-button" onClick={handleDecrease}>-</Button>
            <Input
                type="number"
                placeholder={item.quantity?.toString() || '0'}
                min={min} max={max}
                className="shadcn-button w-[2.9rem] text-center"
                value={inputValue}
                onChange={handleOnChange}
                onBlur={handleBlur} />
            <Button className="shadcn-button" onClick={handleIncrease} disabled={item.quantity >= max}>+</Button>
        </div >
    );
}
