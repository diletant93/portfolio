import Separator from "@/features/abilities/components/Separator";
import AnimalsList from "./AnimalsList";
import Cart from "./Cart";
import CartTotal from "./CartTotal";
import { useSearch } from "../../filter/hooks/useSearch";
import Loader from "@/components/Loader";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CartShowcase() {
    const { data: animals, isLoading } = useSearch('cat')
    const matched = useMediaQuery(MEDIA_QUERIES.MD)
    if (matched) {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex md:flex-row flex-col md:h-[15rem] h-[40vh]">
                    <AnimalsList animals={animals} />
                    {isLoading ? <Loader /> : <Separator />}
                    <div className="flex-1 overflow-y-auto custom-scrollbar [direction:rtl]">
                        <Cart />
                    </div>
                </div>
                <CartTotal />
            </div>
        );
    }
    if (!matched) {
        return (
            <div className="flex flex-col gap-4">
                {isLoading ? <Loader /> : matched ? <Separator /> : null}
                <Tabs defaultValue="animals" className="w-full flex-center flex-col gap-1">
                    <TabsList className="shadcn-tabs-list">
                        <TabsTrigger value="animals" className="shadcn-tabs-trigger">Animals</TabsTrigger>
                        <TabsTrigger value="cart" className="shadcn-tabs-trigger">Cart</TabsTrigger>
                    </TabsList>
                    <TabsContent value="animals" className="w-full sm:translate-x-0 -translate-x-1">
                        <div className="flex md:flex-row flex-col md:h-[15rem] h-[40vh]">
                            <AnimalsList animals={animals} />
                        </div>
                    </TabsContent>
                    <TabsContent value="cart" className="w-full">
                        <div className="flex md:flex-row flex-col md:h-[15rem] h-[40vh]">
                            <div className="flex-1 overflow-y-auto custom-scrollbar [direction:rtl]">
                                <Cart />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                <CartTotal />
            </div>
        );
    }
}
