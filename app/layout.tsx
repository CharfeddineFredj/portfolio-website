import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import ThemeContextProvider from "@/context/theme-context";
import MotionProvider from "@/components/motion-provider";
import ScrollProgress from "@/components/scroll-progress";
import CustomCursor from "@/components/custom-cursor";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charfeddine | Personal Portfolio",
  description:
    "Charfeddine Fredj is a computer engineer and full-stack developer working with modern web technologies and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body
        className={`${inter.className} relative min-h-screen bg-bg pt-28 text-fg antialiased sm:pt-36`}
      >
        <div aria-hidden className="bg-grid pointer-events-none fixed inset-0 -z-10" />
        <div aria-hidden className="glow glow-1" />
        <div aria-hidden className="glow glow-2" />

        <MotionProvider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <ScrollProgress />
              <CustomCursor />
              <Header />
              {children}
              <Footer />

              <Toaster position="top-right" />
              <ScrollToTopButton />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
