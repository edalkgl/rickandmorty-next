import type { Metadata } from "next";

import Providers from "@/src/provider";

import "../styles/tailwind.css";

export const metadata: Metadata = {
  title: "Rick and Morty",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
