import * as React from "react"
import { cn } from "../../lib/utils"

// Button hem button hem de anchor özelliklerini alabilir
type ButtonOrAnchorProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>

export interface ButtonProps extends Partial<ButtonOrAnchorProps> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
    size?: "sm" | "md" | "lg" | "icon"
    href?: string
    // target gibi anchor özellikleri Partial<ButtonOrAnchorProps> içinden gelir
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bor-primary-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95"

        const variants = {
            primary: "bg-bor-primary-900 text-bor-primary-100 hover:bg-bor-primary-800 dark:bg-bor-primary-100 dark:text-bor-primary-900 dark:hover:bg-bor-primary-200 shadow-md hover:shadow-lg",
            secondary: "bg-bor-secondary text-white hover:bg-bor-secondary/90 shadow-sm",
            outline: "border border-bor-primary-200 bg-transparent hover:bg-bor-primary-100 text-bor-primary-900 dark:border-bor-primary-700 dark:text-bor-primary-100 dark:hover:bg-bor-primary-800",
            ghost: "hover:bg-bor-primary-100 dark:hover:bg-bor-primary-800 text-bor-primary-900 dark:text-bor-primary-100",
            link: "text-bor-primary-900 underline-offset-4 hover:underline dark:text-bor-primary-100",
        }

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
            icon: "h-10 w-10",
        }

        if (href) {
            return (
                <a
                    className={cn(baseStyles, variants[variant], sizes[size], className)}
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    role="button"
                    {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
                >
                    {props.children}
                </a>
            )
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref as React.Ref<HTMLButtonElement>}
                {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
            >
                {props.children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
