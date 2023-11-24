import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import Navbar from "@/components/navbar";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de Países",
  description: "Uma lista de países criada usando Next e Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <main className="min-h-screen bg-gray-100 flex flex-col items-center">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
