import { Anek_Bangla, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const anekBangla = Anek_Bangla({
  subsets: ["bengali"],
  weight: ["400", "500", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://next-js-hero-kidz.vercel.app"),

  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz is your trusted online destination for educational toys, STEM learning kits, Montessori materials, puzzles, and creative learning products designed to inspire children's growth through play.",

  verification: {
    google: "QXTIgy7YMZky-LhZdLZztg-aRJ8qV64Sup_Ua56x3SA",
  },

  keywords: [
    "Hero Kidz",
    "Educational Toys",
    "Kids Toys",
    "STEM Toys",
    "Montessori Toys",
    "Learning Toys",
    "Wooden Toys",
    "Puzzle Toys",
    "Kids Education",
    "Bangladesh Toy Shop",
    "Children Learning",
    "Educational Games",
  ],

  authors: [{ name: "Hero Kidz" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  openGraph: {
    title: "Hero Kidz | Educational Toys for Smart Kids",
    description:
      "Discover premium educational toys, Montessori materials, STEM kits, puzzles, and learning games that help children learn while having fun.",

    url: "https://next-js-hero-kidz.vercel.app/",
    siteName: "Hero Kidz",

    images: [
      {
        url: "https://i.ibb.co.com/FC91b8F/1.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Home Preview",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Educational Toys",
    description: "Educational toys and STEM learning products for kids.",

    images: ["https://i.ibb.co.com/FC91b8F/1.png"],
  },

  icons: {
    icon: "https://i.ibb.co.com/bgvsQT59/logo.png",
    shortcut: "https://i.ibb.co.com/bgvsQT59/logo.png",
    apple: "https://i.ibb.co.com/bgvsQT59/logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="container">{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
