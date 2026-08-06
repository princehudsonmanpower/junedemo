import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function SiteLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
        </>
    );
}
