import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "./context/BookingContext";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./main/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <BookingProvider>
            <Header />
            {children}
          </BookingProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
