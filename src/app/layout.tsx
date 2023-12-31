import { Roboto_Mono } from "next/font/google";
import "../styles/Global.css";
import NavBar from "@/components/NavBar";
import Provider from "@/context/Provider";

const roboto = Roboto_Mono({
  weight: ["300", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${roboto.className} flex flex-col bg-gray-700 min-h-screen w-screen`}
        >
          <header className="fixed top-0 z-20 w-full p-3 lg:p-5 bg-slate-900">
            <NavBar />
          </header>
          {children}
        </body>
      </Provider>
    </html>
  );
}
