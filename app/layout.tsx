import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Van Trung | Full-Stack Developer",
  description:
    "Personal portfolio of Nguyen Van Trung — Full-Stack Developer based in Vietnam. Building modern web applications with React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f0f0f] text-gray-100">
        {children}
      </body>
    </html>
  );
}
