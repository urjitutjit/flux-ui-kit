import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-md hover:shadow-lg transform hover:scale-105",
        
        primary: "bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-glow",
        
        secondary: "bg-gradient-secondary text-secondary-foreground shadow-md hover:shadow-lg transform hover:scale-105",
        
        accent: "bg-accent text-accent-foreground shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-accent-dark",
        
        glass: "bg-surface-elevated/80 backdrop-blur-xl border border-border/50 text-foreground shadow-glass hover:bg-surface-elevated hover:shadow-xl transform hover:scale-105",
        
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105",
        
        ghost: "text-foreground hover:bg-muted shadow-none hover:shadow-md transform hover:scale-105",
        
        destructive: "bg-destructive text-destructive-foreground shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-destructive/90",
        
        success: "bg-success text-success-foreground shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-success/90",
        
        link: "text-primary underline-offset-4 hover:underline shadow-none transform hover:scale-105",
        
        glow: "bg-gradient-primary text-primary-foreground shadow-glow animate-glow-pulse hover:shadow-xl transform hover:scale-110",
      },
      size: {
        xs: "h-8 px-3 text-xs rounded-md",
        sm: "h-9 px-4 text-sm rounded-lg",
        default: "h-11 px-6 text-sm rounded-lg",
        lg: "h-12 px-8 text-base rounded-xl",
        xl: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10 rounded-lg",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-lg": "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
