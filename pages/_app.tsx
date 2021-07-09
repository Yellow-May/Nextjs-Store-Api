import type { AppProps } from "next/app";
import { AppProvider } from "../app/store";
import Globalcss from "../styles/globalcss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Globalcss />
			<Component {...pageProps} />
		</AppProvider>
	);
}
export default MyApp;
