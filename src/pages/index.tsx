import Head from 'next/head';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <title>Subverso</title>
    </Head>
    <HeroSection />
    <Footer />
    </>
  )
}