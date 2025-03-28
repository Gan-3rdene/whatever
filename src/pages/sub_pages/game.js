import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import gamestyles from "@/styles/game.module.css";
import Navigation from "../reusable/nav.js";
import Footer from "../reusable/footer.js";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });


export default function Game() {
    return (
      <>
        <Head>
          <title>Whatever Games</title>
          <meta name="description" content="Video game website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Navigation>
        </Navigation>
        
        <div
          classNameName={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
        >
            
            <main className="column">
                <div className="line">
                </div>
                <div class={gamestyles.column}>
                    <img class={gamestyles.gamePart} src="../resources/screenshot/snake.png"/>
                    <div class={gamestyles.endRow}>
                        <p>Snake</p>
                            <div class={gamestyles.row}>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        <div class={gamestyles.endRow}>
                            <input type="text" placeholder="Leave a comment."/>
                        </div>
                        <div class={gamestyles.row}>
                            <div class={gamestyles.column}>
                                <img src="/resources/circle-user-round.svg"/>
                                <p>Qewp123</p>
                            </div>
                            <p>Classic but gold, def worth your time!</p>
                        </div>
                    {/* <script src="../javascript/gamepage.js"></script> */}
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
            </footer> */}
        </div>
      </>
    );
  }
  