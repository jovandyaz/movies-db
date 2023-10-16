import "../global/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import { Navbar, ThemeRegistry } from "@/components";
import { StoreProvider } from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: "TMDB",
  description: "Movies Catalogue",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
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
        </StoreProvider>
      </body>
    </html>
  );
}
