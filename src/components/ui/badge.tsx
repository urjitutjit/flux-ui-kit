import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm hover:shadow-md",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-sm hover:shadow-md",
        outline: "text-foreground border-border hover:bg-muted",
        success:
          "border-transparent bg-success text-success-foreground hover:bg-success/80 shadow-sm hover:shadow-md",
        warning:
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80 shadow-sm hover:shadow-md",
        accent:
          "border-transparent bg-accent text-accent-foreground hover:bg-accent/80 shadow-sm hover:shadow-md",
        glass:
          "border-border/50 bg-surface-elevated/80 backdrop-blur-xl text-foreground hover:bg-surface-elevated shadow-glass",
        glow:
          "border-transparent bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl animate-glow-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
