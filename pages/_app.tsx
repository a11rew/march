import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-11 h-full max-w-[1336px] m-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
