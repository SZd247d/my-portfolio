import "../styles/globals.css";
// import Navigation from "./components/Navigation";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
