import localFont from "next/font/local";

/** Pretendard 폰트 적용 */

export const pretendardFont = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
