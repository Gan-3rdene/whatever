import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "../reusable/nav.js";
import Footer from "../reusable/footer.js";
import Revenue from "../reusable/plot.js";
import GameCard from "../reusable/gamecard.js";

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
                    <Revenue></Revenue>
                    {/* <div class="cardRow">
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
                    </div> */}
            
                    <p>Played Games</p>
                    <div class="cardRow">
                        <GameCard image="/whatever/resources/snake.jpg" title = "Snake" tags = "2D, puzzle"></GameCard>
                        <GameCard image="/whatever/resources/ape.jpg" title = "Ape out" tags = "Action"></GameCard>
                        <GameCard image="/whatever/resources/hedgehog.jpg" title = "Sonic" tags = "Platform"></GameCard>
                        <GameCard image="/whatever/resources/angrybird.jpg" title = "Angrybird" tags = "Puzzle"></GameCard>
                    </div>
                </div>
            </main>
            <Footer>
            </Footer>
        </div>
    </>
    );
}