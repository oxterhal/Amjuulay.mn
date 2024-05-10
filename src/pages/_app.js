import { AuthProvider } from "@/auth/auth-provider";
import { Header } from "@/components";
import Sidebar from "@/components/sidebar";
import "@/styles/globals.css";
import { Inter, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
const roboto = Roboto({
  subsets: ["latin", "cyrillic-ext"],
  style: "normal",
  weight: ["400", "700", "500"],
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "600", "500"],
  style: "normal",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  const path = usePathname();

  return (
    <AuthProvider>
      <main
        className={`${
          inter.variable + " " + roboto.variable
        } max-w-screen h-screen flex min-w-screen`}
      >
        {!(path == "/login" || path == "/sign-up") ? (
          <>
            <Sidebar />
            <div className="flex flex-col w-full">
              <Header />
              <Component {...pageProps} />
            </div>
          </>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </AuthProvider>
  );
}
