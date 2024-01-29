import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
style:['italic', 'normal'], variable:'--font-poppins'});

export const metadata: Metadata = {
  title: "Hotel Mangement App",
  description: "Discover the best hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          {children}
          </main>
        
        </body>
    </html>
  );
}
