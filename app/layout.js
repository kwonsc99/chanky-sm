import { Inter, Noto_Sans_KR } from "next/font/google";
import "../styles/theme.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata = {
  title: "권석찬 SM엔터테인먼트 포트폴리오",
  description: "권석찬 SM엔터테인먼트 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${notoSansKR.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
