import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "700"] // Add the weights you want to use
});

export const metadata: Metadata = {
  title: "[CS132] Education of the Youth - Access Granted",
  description: "Generated using NextJS and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
