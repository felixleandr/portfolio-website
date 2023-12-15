import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeToogle from "@/components/theme-toogle";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Felix Leander | Portfolio",
    description: "A Personal Portfolio and few things to know about me",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-[#F5F5F5] text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50`}
            >
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Toaster position="top-right" />
                    <ThemeToogle />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>

            </body>
        </html>
    );
}
