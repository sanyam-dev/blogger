import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
