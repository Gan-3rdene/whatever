import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "../reusable/nav.js";
import Footer from "../reusable/footer.js";

export default function Library() {
    const ChangeToGame = () => {
        window.location.replace("./game");
    };
    
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
          classNameName={`${styles.page} `}
        >
            <main className="contain">
                <div class="line">
                </div>
                <div class="column" id="padding">
                    <p>My Games</p>
                    <div class="cardRow">
                        <div class="gameCard" onClick={ChangeToGame}>
                            <img class="gameImage" src="../resources/snake.jpg" alt="Snake"/>
                            <div class="pcollection">
                                <p>Snake</p>
                                <p>Plays: 240</p>
                                <div class="row">
                                    <p>Earnings: </p>
                                    <p class="earnings">450$</p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <p>Played Games</p>
                    <div class="cardRow">
                        <div class="gameCard" onclick={ChangeToGame}>
                            <img class="gameImage" src="../resources/snake.jpg" alt="Snake"/>
                            <div class="pcollection">
                            <p>Snake</p>
                            <p class="tags">2D, Puzzle</p>
                            </div>
                        </div>
                        <div class="gameCard">
                            <img class="gameImage" src="../resources/ape.jpg" alt="Ape"/>
                            <div class="pcollection">
                            <p>Ape out</p>
                            <p class="tags">Action</p>
                            </div>
                        </div>
                        <div class="gameCard">
                            <img class="gameImage" src="../resources/hedgehog.jpg" alt="hedgehog"/>
                            <div class="pcollection">
                            <p>Sonic</p>
                            <p class="tags">Platform</p>
                            </div>
                        </div>
                        <div class="gameCard">
                            <img class="gameImage" src="..\resources\angrybird.jpg" alt="Snake"/>
                            <div class="pcollection">
                            <p>Angrybird</p>
                            <p class="tags">Puzzle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer>
            </Footer>

        </div>
    </>
    );
}