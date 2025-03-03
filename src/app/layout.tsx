import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";


export const metadata: Metadata = {
  title: "Vivid Tab: A new tab, a new vibe.",
  description: "Customize your new tab with bookmarks, weather, to-dos, and more for a vibrant, productive browsing experience.",
  icons: [
    {
      url: "/icon.png",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}