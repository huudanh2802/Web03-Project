import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobalProvider from "@/providers/global-provider";
import AuthContainer from "@/containers/signin/auth-container";

export const metadata: Metadata = {
  title: "CalicoNote",
  description: "A cross platform inspired by ICloud Note",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`antialiased`}>
        <GlobalProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <AuthContainer>{children}</AuthContainer>
          </ThemeProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
