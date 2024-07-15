import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pizzrella | Cheesiest Pizza in the town",
  description: "Pizzrella provides you with the best, cheesious pizza available that will leave your mouth watering with every bite.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-4xl mx-auto p-4 border">
        {children}
        </main>
        </body>
    </html>
  );
}
