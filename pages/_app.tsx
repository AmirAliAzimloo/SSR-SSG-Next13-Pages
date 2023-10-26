import "@/styles/globals.css";
import {AppProps} from "@/types/appTypes"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default App;