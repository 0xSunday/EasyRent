import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Easy Rent",

  description:
    "Vachel Rental App is a comprehensive and user-friendly rental management application designed to streamline the process of renting and managing properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo5.png" />
      </head>
      <ClerkProvider>
        <body>
          <SignedIn>
            <Navbar />
            {children}
            <Footer />
          </SignedIn>
          <Toaster position="top-center" reverseOrder={false} />
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </ClerkProvider>
    </html>
  );
}
