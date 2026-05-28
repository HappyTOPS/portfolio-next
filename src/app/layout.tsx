import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/hooks/useLanguageStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export const metadata: Metadata = {
  title: "Альберт | Product Engineer",
  description: "Личное портфолио Альберта — продуктового инженера",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LangProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingChat />
        </LangProvider>
      </body>
    </html>
  );
}
