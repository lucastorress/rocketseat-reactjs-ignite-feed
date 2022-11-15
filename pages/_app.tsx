import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400'
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --roboto-font: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
