import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdminDash",
  description:
    "AdminDash is a practice project, made to learn about how admin dashboards UI is built.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-w-80`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full relative overflow-clip">
            <div className="flex flex-wrap">
              <SidebarProvider>
                <AppSidebar />
                <div className="flex-1">
                  <Header />
                  <main>{children}</main>
                </div>
              </SidebarProvider>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
