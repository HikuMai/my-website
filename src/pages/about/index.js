import Head from "next/head";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import profilePic from "/public/hikumai.jpg";

export default function About() {
  return (
    <>
      <Head>
        <title>Hello I’m HikuMai | Dũng Hiếu Nguyễn</title>
        <meta name="description" content="The golden Ape" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.infoHero}>
        <div className={styles.infoHeroCol}>
          <div className={styles.infoHeroAvatar}>
            <Image
              src={profilePic}
              alt="Picture of the author"
              width={700}
              height={700}
            />
          </div>
        </div>
        <div className={styles.infoHeroCol}>
          <h1 className={styles.h1}>
            I’m Hiku, the name is Nguyễn Dũng Hiếu, a Web Designer working
            remotely for scouting for mobile products.
          </h1>
          <p className={styles.p}>
            After finishing my education in mechatronic in the end of January,
            2021, I wanted to start up in gastronomy cause of my interest. But
            the pandemic was still serve. I had to redirect my goal and shifted
            my focus to mobile users.
          </p>
          <p className={styles.p}>
            I began my quest to learn to web development in early April, 2021. I
            researched the mobile products and ended up buying some
            web-developing courses on Udemy. I left the program from Dr. Angela
            Yu as a full fledged web developer. Since then, I have grown a
            decent amount by researching and working on a variety of projects in
            a group.
          </p>
          <p className={styles.p}>
            By surrounding myself with some of the most intelligent, passionate,
            and hard working people in the field, I was able to learn an
            astounding amount. I am eager to continue growing my knowledge of
            software so I can become a great developer.
          </p>
        </div>
      </section>
    </>
  );
}
