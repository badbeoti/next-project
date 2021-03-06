// import { App } from "next/app";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps}></Component>;
}

export default MyApp;
