import { useState, useEffect } from "react";
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


  
// export default function Game({data}) { #add later
export default function Game() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/whatever/api/game/game');
  //       const json = await res.json();
  //       setData(json);
  //     } catch (error) {
  //       console.error("error data fetch", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
    
    // const fetchData = async () => {
    //   const res = await fetch('http://localhost:3000/whatever/api/game/game');
    //   const data = await res.json();
    //   return data;
    // }

    // const data = fetchData();

    return (
      <>
        <Head>
          <title>Whatever Games</title>
          <meta name="description" content="Video game website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        
        <Navigation/>
        
        <div
          classNameName={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
        >
            <main className="column">
                <div className="line">
                </div>
                <div class={gamestyles.column}>
                    {/* {data.map((game) => (
                      <img key={game.id} classname={gamestyles.gamePart} src={game.cover}></img>
                    ))} */}
                    <img class={gamestyles.gamePart} src="/whatever/resources/screenshot/snake.png"/>
                    <div class={gamestyles.endRow}>
                      {/* {data.map((game) => (
                        <p key={game.id} className={gamestyles.title}>
                          {game.title}
                        </p>
                      ))} */}
                      <div class={gamestyles.row}>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                    <div class={gamestyles.startColumn}>
                      {/* {data.map((game) => (
                        <p key={game.id} className={gamestyles.title}>
                          Description: {game.description}
                        </p>
                      ))}
                      {data.map((game) => (
                        <p key={game.id} className={gamestyles.title}>
                          How to play: {game.how_to_play}
                        </p>
                      ))} */}
                    </div>
                    <div className={gamestyles.smallLine}/>
                    <div class={gamestyles.endRow}>
                        <input type="text" placeholder="Leave a comment."/>
                    </div>
                    <div class={gamestyles.row}>
                      <div class={gamestyles.column}>
                        <img src="/whatever/resources/circle-user-round.svg"/>
                        <p>Qewp123</p>
                      </div>
                        <p>Classic but gold, def worth your time!</p>
                    </div>
                </div>
            </main>

            <Footer>
            </Footer>
        </div>
      </>
    );
  }
  
// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/whatever/api/game/game');
//   const json = await res.json();
//   const data = Array.isArray(json) ? json : [json];
//   console.log("fetched: ",data);
//   return {
//     props: {
//       data,
//     },
//   };
// }