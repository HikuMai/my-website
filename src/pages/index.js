import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello I&apos;m HikuMai | Dũng Hiếu Nguyễn</title>
        <meta name="description" content="The golden Ape" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heading}>&quot;Hi. I&apos;m HikuMai.&quot;</h1>
          <h1 className={styles.heading}>A Designer</h1>
          <p className={styles.heroSub}>
            I&apos;m also a front-end developer and general doodler with a keen eye
            for creating engaging UI, bringing products to life.
          </p>
        </section>
      </main>
    </div>
  );
}
