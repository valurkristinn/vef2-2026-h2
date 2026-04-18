import "./github-markdown-light.css";
import "@/styles/global.sass";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <body className="markdown-body">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
