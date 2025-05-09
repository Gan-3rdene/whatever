import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css"; 
import Navigation from "./reusable/nav2.js";
import Footer from "./reusable/footer.js";
import Script from "next/script.js";
import GameCard from "./reusable/gamecard.js";
import { useEffect, useState } from "react";
import NewsCard from "./reusable/newscard.js";

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
  const [games, setGames] = useState([]);
  const apiKey = "8ca4ca222b19463aa56c28d3bd1df8f7"
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:5001/gamesquery");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games: ", error);
      }
    };
    fetchGames();
    const fetchNews = async () => {
      try {
        var url = 'https://newsapi.org/v2/everything?' +
          'q=Games&' +
          'from=2025-05-08&' +
          'sortBy=popularity&' +
          'apiKey=8ca4ca222b19463aa56c28d3bd1df8f7';
        var req = new Request(url);

        fetch(req)
        .then(response => response.json())
        .then(data => setNews(data))
        // console.log(data)
        .catch(error => console.error("Error fetching news:", error));
      } catch(error) {
        console.error("Get news error", error);
      }
    }
    fetchNews();
    
  }, []);
  
  

  return (
    <>
      <Head>
        <title>Whatever Games</title>
        <meta name="description" content="Video game website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <base href="/whatever/"/>
      </Head>

      <Navigation/>
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
                  {games.map((game) => (
                    <GameCard key={game.game_id} image={game.cover} title={game.tags} />
                  ))}
                  {/* <GameCard image="./resources/snake.jpg" title = "Snake" tags = "2D, puzzle"></GameCard>
                  
                  <GameCard image="./resources/ape.jpg" title = "Ape out" tags = "Action"></GameCard>
                  
                  <GameCard image="./resources/hedgehog.jpg" title = "Sonic" tags = "Platform"></GameCard>
              
                  <GameCard image="./resources/angrybird.jpg" title = "Angrybird" tags = "Puzzle"></GameCard> */}
                </div>
                <p>Popular Games</p>
                <div className="cardRow">
                  <GameCard image="./resources/hedgehog.jpg" title = "Sonic" tags = "Platform"></GameCard>
                  {/* <div className="gameCard">
                      <img className="gameimg" src="../resources/hedgehog.jpg" alt="hedgehog"/>
                      <div className="pcollection">
                        <p>Sonic</p>
                        <p className="tags">Platform</p>
                      </div>
                  </div> */}
                  <GameCard image="./resources/ape.jpg" title = "Ape out" tags = "Action"></GameCard>
                  {/* <div className="gameCard">
                      <img className="gameimg" src="../resources/ape.jpg" alt="Ape"/>
                      <div className="pcollection">
                        <p>Ape out</p>
                        <p className="tags">Action</p>
                      </div>
                  </div> */}
                  <GameCard image="./resources/snake.jpg" title = "Snake" tags = "2D, puzzle"></GameCard>
                  {/* <div className="gameCard" onClick="changeToGame()">
                      <img className="gameimg" src="/resources/snake.jpg" alt="Snake"/>
                      <div className="pcollection">
                        <p>Snake</p>
                        <p className="tags">2D, Puzzle</p>
                      </div>
                  </div> */}
                  <GameCard image="./resources/angrybird.jpg" title = "Angrybird" tags = "Puzzle"></GameCard>
                  {/* <div className="gameCard">
                      <img className="gameimg" src="../resources/angrybird.jpg" alt="Snake"/>
                      <div className="pcollection">
                        <p>Angrybird</p>
                        <p className="tags">Puzzle</p>
                      </div>
                  </div> */}
                </div>
                <p>News</p>
                <div className="cardRow">
                  {news.articles?.map((article) => (
                    <NewsCard key={article.author} image={article.urlToImage || "./resources/angrybird.jpg"} title={article.title} onClick={() => window.open(article.url, "_blank")}/>
                  ))}
                  {/* {games.map((game) => (
                    <GameCard key={game.game_id} image={game.cover} title={game.tags} />
                  ))} */}
                </div>
            </div>
          </div>
        </main>

        <Footer>
        </Footer>
        
      </div>
      <Script src="../javascript/mainhtml.js"></Script>
    </>
  );
}
