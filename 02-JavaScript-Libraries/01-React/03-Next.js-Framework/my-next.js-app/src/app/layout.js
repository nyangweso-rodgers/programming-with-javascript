import { Trirong } from "next/font/google";
import "./globals.css";

const trirong = Trirong({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Next.js App",
  description: "Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={trirong.className}>{children}</body>
    </html>
  );
}
