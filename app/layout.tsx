import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
});

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
      <body className={`bg-darkBlack ${sourceCodePro.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
