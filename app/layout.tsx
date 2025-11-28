import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col font-sans antialiased selection:bg-blue-500/30">
        <Navbar />
        <main className="flex-grow max-w-6xl mx-auto w-full px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
