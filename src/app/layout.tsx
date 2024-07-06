import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import StreamVideoProvider from "../../providers/StreamClientProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoom Clone",
  description:
    "Zoom app for video conference and best practice and improve coding skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: { logoImageUrl: "/icons/logo.svg" },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1c1f2e",
          colorInputBackground: "#252a41",
        },
      }}
    >
      <html>
        <body className="bg-dark-1 relative">
          <StreamVideoProvider>{children}</StreamVideoProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
