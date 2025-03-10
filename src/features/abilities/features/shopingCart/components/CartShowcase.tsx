import Separator from "@/features/abilities/components/Separator";
import AnimalsList from "./AnimalsList";
import Cart from "./Cart";
import CartTotal from "./CartTotal";

export default function CartShowcase() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:h-[15rem] h-[40vh]">
                <AnimalsList />
                <Separator />
                <div className="flex-1 overflow-y-auto custom-scrollbar [direction:rtl]">
                    <Cart />
                </div>
            </div>
            <CartTotal/>
        </div>
    );
}
