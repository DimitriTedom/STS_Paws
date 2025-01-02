import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '600', '700'], // Adjust as needed
});

export const metadata = {
  title: "STS Paws & Play",
  description: "Premier pet store offering quality products and services for your beloved pets",
  url: "https://sts-paws.vercel.app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
