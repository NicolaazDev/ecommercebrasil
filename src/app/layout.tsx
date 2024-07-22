import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "@/components/navbar";

export const metadata: Metadata = {
  title: "IplaceBox - Home",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
