import { Inter } from 'next/font/google';
import "./globals.css";

export const metadata = {
  title: "Web Developer Portfolio",
  description: "A Web Developer Portfolio",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: Define CSS variable if needed
  display: 'swap', // Recommended to avoid FOUT
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
