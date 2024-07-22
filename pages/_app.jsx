import '@/styles/globals.css'
import {MathJaxContext} from 'better-react-mathjax'
// import type { AppProps } from 'next/app'

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  },
  startup: {
    typeset: false
  }
};

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <MathJaxContext config={config} version={3}>
      <Component {...pageProps} />
    </MathJaxContext>
  );
}
