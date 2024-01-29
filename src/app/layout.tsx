import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// don't forget / after @ symbol, took me half an hour to see that symbol 
import Header from '@/components/Header/Header';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
style:['italic', 'normal'], variable:'--font-poppins'});

export const metadata: Metadata = {
  // works like head title on html
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
        {/* imports header component */}
      <Header /> 
        <main className="font-normal">
          {/* {children} */}
          {/* ?Footer */}
          </main>
        
        </body>
    </html>
  );
}
