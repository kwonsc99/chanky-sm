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
  title: "주니어 기획자 권석찬 포트폴리오",
  description:
    "고객의 필요를 선제적으로 파악하고, 적시에 실현가능한 형태로 제공하겠습니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${notoSansKR.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
