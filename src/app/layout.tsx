import { Metadata } from "next";
import { Toaster } from "sonner";
import { Mulish } from "next/font/google";
import LoadProvider from "@/context/LoadProvider";
import Provider from "@/context/Provider";
import NavBar from "@/components/Navbar/NavBar";
import "../styles/Global.css";

const mulish = Mulish({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "My Task Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${mulish.className} bg-zinc-800 min-h-screen`}>
          <LoadProvider>
            <header className="fixed z-20 w-full bg-zinc-900">
              <NavBar />
            </header>
            {children}
            <Toaster />
          </LoadProvider>
        </body>
      </Provider>
    </html>
  );
}
