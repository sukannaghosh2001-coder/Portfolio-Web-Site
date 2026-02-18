import * as React from "react"
import { cn } from "@/lib/utils"

const GlassCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 shadow-xl group hover:shadow-yellow-400/10",
            className
        )}
        {...props}
    />
))
GlassCard.displayName = "GlassCard"

export { GlassCard }
