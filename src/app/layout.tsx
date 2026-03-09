import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevSphere | Amit Naganuri Portfolio',
  description: 'Portfolio of Amit Naganuri, 2nd Year Computer Science Engineering Student',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
