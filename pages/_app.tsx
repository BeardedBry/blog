import type { AppProps } from 'next/app';
import '../styles/base.css'

function myApp({Component, pageProps }: AppProps){
    return <Component {...pageProps} />
}

export default myApp;