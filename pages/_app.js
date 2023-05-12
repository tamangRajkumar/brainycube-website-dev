import Navbar from "@/src/components/HeaderFooter/Nav";
import "../styles/globals.css";
import Popup from "@/src/components/popup/Popup";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />;
      <Popup />
    </>
  );
}
