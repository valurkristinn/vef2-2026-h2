import { Geist, Geist_Mono } from "next/font/google";
import "./github-markdown-light.css"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <main className="max-w-3xl w-[90vw] !mx-auto px-6 markdown-body">
      {children}
      </main>
      </body>
    </html>
  );
}
