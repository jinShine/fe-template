import { configureSEOMetadata } from "@configs/seo/config";

import { pretendardFont } from "@styles/global-font";

import AppLayout from "./(root)/AppLayout";
import AppProvider from "./(root)/AppProvider";
import "./globals.css";

export const metadata = configureSEOMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendardFont.className}>
        <AppProvider>
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
