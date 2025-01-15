"use client";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SessionProvider } from "next-auth/react";
import { store } from "@/lib/store";

// export const metadata: Metadata = {
//   title: "CalicoNote",
//   description: "A cross platform inspired by ICloud Note",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`antialiased`}>
        <Provider store={store}>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
              <ModeToggle />
              {children}
            </ThemeProvider>
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
}
