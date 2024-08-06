import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({ 
  subsets: ["latin"] ,
  variable: '--font_work_sans',
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimaslist figma clone using liveblocks for realtime collaborations, fabricjs, and shadcn-ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
