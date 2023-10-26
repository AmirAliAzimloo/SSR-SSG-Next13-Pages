import Navbar from "@/components/modules/Navbar/Navbar";
import "@/styles/globals.css";
import {AppProps} from "@/types/appTypes"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  );
}

export default App;