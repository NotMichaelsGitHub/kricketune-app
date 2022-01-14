import Head from 'next/head';
import Main from '../components/Main';
import Test from '../components/Test';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kricketune</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Test />
      <Main />

      <footer className={styles.footer}>
        <a
            href="https://michaeldipaolo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by michaeldipaolo{' '}
            {/* <img src="/unison_logo_full.svg" className={styles.logo} /> */}
          </a>
      </footer>
    </div>
  )
}
