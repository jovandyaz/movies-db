import "../styles/globals.css";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar, ThemeRegistry } from "@/components";

export const metadata: Metadata = {
  title: "TMDB",
  description: "Movies Catalogue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          {
            <>
              <Navbar />
              <Suspense>
                <main>{children}</main>
              </Suspense>
            </>
          }
        </ThemeRegistry>
      </body>
    </html>
  );
}
