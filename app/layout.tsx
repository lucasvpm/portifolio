import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Portfolio - Lucas Vianna",
  description: "Full-Stack Developer | TYPESCRIPT | PHP | WORDPRESS | SHOPIFY | VTEX | REACT | NEXT.js | SQL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
