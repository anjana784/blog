import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavigationProvider from "./NavigationContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "anjana784",
  description: "Freelance Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-darkBlack">
        <NavigationProvider>
          <Header />
          {children}
        </NavigationProvider>
        <Footer />
      </body>
    </html>
  );
}
