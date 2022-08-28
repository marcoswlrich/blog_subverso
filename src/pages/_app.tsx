
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Footer />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
