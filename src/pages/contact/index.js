import Head from "next/head";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Hello I&apos;m HikuMai | Dũng Hiếu Nguyễn</title>
        <meta name="description" content="The golden Ape" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.infoHero}>
        <div className={styles.infoHeroCol}>
          <h1 className={styles.h1}>Contact me for almost anything</h1>
          <p className={styles.p}>
            Please feel free to contact me about anything. If you are interested
            in getting into programming, employing my new found skills, learning
            about my experience, helping me learn (pairing would be awesome), or
            even just chatting, send me an email.
          </p>
          <p className={styles.p}>
            <a className={styles.pRed} href="hikudeptrai@gmail.com">
              hikudeptrai@gmail.com
            </a>
          </p>
          <p className={styles.p}>
            <a
              className={styles.pRed}
              href="https://www.linkedin.com/in/d%C5%A9ng-hi%E1%BA%BFu-nguy%E1%BB%85n-88a7a020b/"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
