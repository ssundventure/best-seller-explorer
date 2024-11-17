import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";
import { Delicious_Handrawn } from 'next/font/google'

const delicious = Delicious_Handrawn({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: {
    template: "%s | NYTimes BestSeller",
    default: "NYTimes BestSeller",
  },
  description: "The New York Times Best Seller Explorer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={delicious.className}>
      <body>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
