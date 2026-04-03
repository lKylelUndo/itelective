import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"

export default function GuestLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Header />
                <div className="min-h-screen">
                    {children}
                </div>
            <Footer />
        </main>
    )
}