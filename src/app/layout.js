import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "HawkStack",
  description: "Red Hat Consulting for Cloud, Automation & Security",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " className={poppins.variable}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
