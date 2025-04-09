import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "주니어 기획자 권석찬 포트폴리오",
  description:
    "고객의 필요를 선제적으로 파악하고, 적시에 실현가능한 형태로 제공하겠습니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
