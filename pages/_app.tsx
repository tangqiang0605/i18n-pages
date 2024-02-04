// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from '../next-i18next.config.mjs'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

const I18nApp = appWithTranslation(App, nextI18nConfig);

export default I18nApp;