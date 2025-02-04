import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?:'medium'|'big'
}
export default function Button({className, variant,size, ...props}: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({variant,size}),className)}/>
  );
}

const buttonVariants = cva(
  "py-2 px-4 border font-semibold text-secondary hover:bg-secondary hover:text-primary transition-colors duration-300",
  {
    variants:{
      variant:{
        primary:'border-secondary',
        secondary:'' 
      },
      size:{
        medium:'',
        big:''
      }
    },
    defaultVariants:{
      variant:'primary',
      size:'big'
    }
  }
)
