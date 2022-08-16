import Head from 'next/head';

import styles from  '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
      <title>Subverso</title>
    </Head>
      <h1 className={ styles.title}>
      
        Hello Word
      </h1>
    </>
  )
}