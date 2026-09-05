import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cegeo Ucentral | Geología Universidad Central de Chile",
  description:
    "Sitio web oficial CEGEO UCENTRAL. Página dedicada a los estudiantes de Geología de la Universidad Central de Chile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FBF6F1] text-[#3D2B1F]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
