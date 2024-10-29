import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { Inter } from 'next/font/google';

export const metadata = {
  title: "Portfolio",
  description: "A Web Developer Portfolio",
};

const inter = Inter({
  subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
  variable: '--font-inter', // Optional: Define CSS variable for custom usage
  display: 'swap',          // Recommended: Adds fallback display style for improved loading
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />      </Head>
      <body  className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
