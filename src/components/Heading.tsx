import { cn } from "@/lib/utils";

export default function Heading({children, className}:{children:React.ReactNode, className?:string}) {
  return (
    <h1 className={cn('text-4xl text-secondary')}>
        {children}
    </h1>
  );
}
