import { cn } from "@/lib/utils";

export default function Heading({children, className}:{children:React.ReactNode, className?:string}) {
  return (
    <h1 className={cn('h1', className)}>
        {children}
    </h1>
  );
}
