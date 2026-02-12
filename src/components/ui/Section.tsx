import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
// Type-only import
import type { HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
    mood?: "light" | "dark" | "gray" | "accent" | "img"
    container?: boolean
    fullHeight?: boolean
    width?: "default" | "narrow" | "wide"
    animate?: boolean
    children?: ReactNode
}

export function Section({
    className,
    mood = "light",
    container = true,
    fullHeight = false,
    width = "default",
    animate = true,
    children,
    ...props
}: SectionProps) {
    const moods = {
        light: "bg-bor-background text-bor-foreground",
        dark: "bg-bor-primary-900 text-white",
        gray: "bg-bor-primary-50 text-bor-primary-900 dark:bg-bor-primary-800 dark:text-bor-foreground",
        accent: "bg-bor-secondary text-white",
        img: "bg-center bg-cover text-white relative",
    }

    const widths = {
        default: "max-w-7xl",
        narrow: "max-w-4xl",
        wide: "max-w-[1400px]",
    }

    // Animation props with specific types to avoid TS errors
    const animationProps = animate
        ? {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6, ease: "easeOut" as const },
        }
        : {}

    return (
        <motion.section
            className={cn(
                "relative py-20 md:py-32 transition-colors duration-500 overflow-hidden",
                moods[mood],
                fullHeight && "min-h-screen flex flex-col justify-center",
                className
            )}
            {...animationProps}
            {...props}
        >
            {container ? (
                <div className={cn("mx-auto px-4 sm:px-6 lg:px-8 relative z-10", widths[width])}>
                    {children}
                </div>
            ) : (
                children
            )}
        </motion.section>
    )
}
