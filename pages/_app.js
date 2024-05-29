import { CartContextProvider } from "@/components/CartContext";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <SpeedInsights/>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
