import type { ReactNode } from "react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"

interface MainLayoutProps {
    children: ReactNode
    showFooter?: boolean
    transparentHeader?: boolean
    headerLightText?: boolean
}

export function MainLayout({
    children,
    showFooter = true,
    transparentHeader = false,
    headerLightText = false
}: MainLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-bor-background font-sans text-bor-foreground selection:bg-bor-secondary selection:text-white">
            <Header transparent={transparentHeader} lightText={headerLightText} />
            <main className="flex-1">{children}</main>
            {showFooter && <Footer />}
        </div>
    )
}
