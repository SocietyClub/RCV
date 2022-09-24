import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import Router from 'next/router';

const Home: NextPage = () => {
  const GTM_ID = 'GTM-55QBJ7M';
  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}
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
              Ranked Choice Voting (RCV) is an electoral system conducted when voters vote in order of preference. Hypothetically speaking, let&apos;s say a
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
            <p>You can learn more at <a href="https://www.rcvresources.org">www.rcvresources.org</a></p>
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
