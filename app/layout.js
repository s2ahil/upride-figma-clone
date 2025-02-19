import { Inter, Anybody } from "next/font/google";
import "./globals.css";

const anybody = Anybody({ subsets: ["latin"], weight: ["400"] }); // Add weights as needed

export const metadata = {
  title: "Upride template",
  description: "Template for booking a lesson to learn to drive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={anybody.className}>{children}</body>
    </html>
  );
}
