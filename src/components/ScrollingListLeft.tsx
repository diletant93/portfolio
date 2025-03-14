import { cn } from "@/lib/utils";

type ScrollingListProps<T> ={
  items:T[],
  renderItem:(item:T, index?:number) => React.ReactNode
}
export default function ScrollingListLeft<T>({items, renderItem}:ScrollingListProps<T>) {
  const animation = `animate-[scrollLeft_30s_linear_infinite]`
  return (
    <div className="flex overflow-hidden gap-1 [user-select:none]">
    <ul className={cn('flex gap-1 flex-shrink-0', animation)}>
        {items.map((item: T, index:number) => <li key={`index-${index}`}>{renderItem(item,index)}</li>)}
    </ul>
    <ul className={cn('flex gap-1 flex-shrink-0', animation)} aria-hidden='true' >
        {items.map((item: T, index:number) => <li key={`index-${index}`}>{renderItem(item,index)}</li>)}
    </ul>
</div>
  );
}

