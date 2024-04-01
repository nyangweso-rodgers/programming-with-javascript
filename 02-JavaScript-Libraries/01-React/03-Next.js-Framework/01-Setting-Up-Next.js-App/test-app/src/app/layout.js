import { Trirong } from "next/font/google";
import "./globals.css";

const trirong = Trirong({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={trirong.className}>{children}</body>
    </html>
  );
}
