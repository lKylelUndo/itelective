import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"

export default function GuestLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <a
                href="#page-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:border focus:border-ink focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[13px] focus:text-paper"
            >
                Skip to content
            </a>
            <Header />
            <div id="page-content" className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    )
}
