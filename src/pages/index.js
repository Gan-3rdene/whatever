import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css"; 
import Navigation from "./reusable/nav.js";
import Footer from "./reusable/footer.js";
import Script from "next/script.js";
import GameCard from "./reusable/gamecard.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // const ChangeToGame = () => {
  //   window.location.replace("./sub_pages/game");
  // };

  return (
    <>
      <Head>
        <title>Whatever Games</title>
        <meta name="description" content="Video game website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation></Navigation>
      <div
        classNameName={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main>
          <div className="contain">
            <div className="line">
            </div>
            <div className="column" id="padding">
                <p>Latest Games</p>
                <div className="cardRow">
                  <GameCard image="../resources/snake.jpg" title = "Snake" tags = "2D, puzzle"></GameCard>
                  
                  <GameCard image="../resources/ape.jpg" title = "Ape out" tags = "Action"></GameCard>
                  
                  <GameCard image="../resources/hedgehog.jpg" title = "Sonic" tags = "Platform"></GameCard>
              
                  <GameCard image="../resources/angrybird.jpg" title = "Angrybird" tags = "Puzzle"></GameCard>
                </div>
                <p>Popular Games</p>
                <div className="cardRow">
                  <GameCard image="../resources/hedgehog.jpg" title = "Sonic" tags = "Platform"></GameCard>
                  {/* <div className="gameCard">
                      <img className="gameimg" src="../resources/hedgehog.jpg" alt="hedgehog"/>
                      <div className="pcollection">
                        <p>Sonic</p>
                        <p className="tags">Platform</p>
                      </div>
                  </div> */}
                  <GameCard image="../resources/ape.jpg" title = "Ape out" tags = "Action"></GameCard>
                  {/* <div className="gameCard">
                      <img className="gameimg" src="../resources/ape.jpg" alt="Ape"/>
                      <div className="pcollection">
                        <p>Ape out</p>
                        <p className="tags">Action</p>
                      </div>
                  </div> */}
                  <GameCard image="../resources/snake.jpg" title = "Snake" tags = "2D, puzzle"></GameCard>
                  {/* <div className="gameCard" onClick="changeToGame()">
                      <img className="gameimg" src="/resources/snake.jpg" alt="Snake"/>
                      <div className="pcollection">
                        <p>Snake</p>
                        <p className="tags">2D, Puzzle</p>
                      </div>
                  </div> */}
                  <GameCard image="../resources/angrybird.jpg" title = "Angrybird" tags = "Puzzle"></GameCard>
                  {/* <div className="gameCard">
                      <img className="gameimg" src="../resources/angrybird.jpg" alt="Snake"/>
                      <div className="pcollection">
                        <p>Angrybird</p>
                        <p className="tags">Puzzle</p>
                      </div>
                  </div> */}
                </div>
            </div>
          </div>
        </main>

        <Footer>
        </Footer>
        {/* <footer classNameName={styles.footer}>
          <div class="footer-container">
            <div class="social-icons">
              <a href="#" class="social-icon">
                <img src="./resources/facebook.png" alt="Facebook"/>
              </a>
              <a href="#" class="social-icon">
                <img src="./resources/twitter.png" alt="X (Twitter)"/>
              </a>
            </div>
            <div class="footer-links">
              <a href="/about">About</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer> */}
      </div>
      <Script src="../javascript/mainhtml.js"></Script>
    </>
  );
}
