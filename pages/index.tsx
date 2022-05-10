import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DividerMobile from "../public/pattern-divider-mobile.svg";
import DiceIcon from "../public/icon-dice.svg";

const Home: NextPage = ({
  advice,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div id={styles.app}>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1>ADVICE #{advice.id}</h1>
        <p>{advice.advice}</p>
        <div
          style={{
            position: "relative",
            height: "16px",
            width: "100%",
            maxWidth: "444px",
          }}
        >
          <Image src={DividerMobile} alt="divider" layout="fill" />
        </div>
        <div id={styles.iconCircle}>
          <Image src={DiceIcon} alt="dice icon" />
        </div>
      </main>

      <footer>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor.
          </a>
          <br />
          Coded by{" "}
          <a href="https://jonerikullvang.no/" target="_blank" rel="noreferrer">
            Jon Erik Ullvang
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetch("https://api.adviceslip.com/advice/117");
  const advice = await data.json();
  return {
    props: {
      advice: advice.slip,
    },
  };
};
