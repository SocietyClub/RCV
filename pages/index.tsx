import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import Router from 'next/router';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ranked Choice Voting</title>
        <meta name="description" content="A way to vote more sensibly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ranked Choice Voting</h1>

        <div className={styles.spacer} />

        <Button variant="contained" onClick={_ => Router.push('/createPoll')}>
          Create Poll
        </Button>

        <div className={styles.variedBackground}>
          <h1>What is RCV?</h1>
          <br />
          <div className={styles.paragraphInCol}>
            <p>
              Ranked Choice Voting (RVC) is an electoral system conducted when voters vote in order of preference. Hypothetically speaking, let&apos;s say a
              candidate needs to earn half of the votes to win (50%).
            </p>

            <p>
              The least voted candidate gets eliminated and voters who picked that candidate as their first choice will have their next preference candidate
              counted. This process continues until a candidate earns a majority and is declared winner.
            </p>

            <p>
              Benefits of RCV allows more voters to vote for their favorite candidate rather than the one they least disliked. More positive campaign and less
              negative advertising candidates are encouraged to reach out to as many voters as possible as well supporting other candidates.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Create</h2>
            <p>Create a poll and get a link</p>
          </div>
          <div className={styles.card}>
            <h2>Vote</h2>
            <p>Share your poll with your voters</p>
          </div>
          <div className={styles.card}>
            <h2>Compute</h2>
            <p>Our app will find the ideal winner</p>
          </div>
        </div>

        <div className={styles.variedBackground}>
          <h1>
            <u>FAQs</u>
          </h1>
          <div className={styles.paragraphInCol}>
            <b>
              <p>Where can I learn more about RCV?</p>
            </b>
            <p>You can learn more at rcvresources.org</p>
            <br />

            <b>
              <p>How much does Cost? </p>
            </b>
            <p>Free as long as the hosting costs reasonable!</p>
            <br />

            <b>
              <p>Problems with the app? </p>
            </b>
            <p>Email teamsocietyclub@gmail.com</p>
            <br />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
