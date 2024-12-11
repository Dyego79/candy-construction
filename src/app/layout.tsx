import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Candy Cortantes - Tienda",
  description: "Tienda de cortantes para galletitas y masas",
  openGraph: {
    title: "Candy Cortantes - Tienda",
    description: "Tienda de cortantes para galletitas y masas",
    url: "https://candycortantes.com.ar",
    type: "website",
    images: [
      {
        //url: "https://candycortantes.com.ar/opengraph-image.jpg",
        url: "http://localhost:3000/opengraph-image.jpg",
        width: 600,
        height: 600,
        alt: "Logo Candy Cortantes",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
